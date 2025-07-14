import React, { useEffect, useState } from 'react';
import { ObrasService } from '../../lib/api';

interface Diario {
  id: string;
  data: string;
  responsavel: string;
  resumo: string;
}

interface ObraDiariosListProps {
  obraId: string;
  onSelectDiario?: (diario: Diario) => void;
  onCreate?: () => void;
}

const ObraDiariosList: React.FC<ObraDiariosListProps & {
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}> = ({ obraId, onSelectDiario, onCreate, onEdit, onDelete }) => {
  const [diarios, setDiarios] = useState<Diario[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    ObrasService.getDiarios(obraId)
      .then(setDiarios)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [obraId]);

  return (
    <div className="border rounded p-4 bg-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Diários de Obra</h2>
        {onCreate && (
          <button className="btn btn-primary" onClick={onCreate}>
            Novo Diário
          </button>
        )}
      </div>
      {loading && <div>Carregando...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <ul className="divide-y">
        {diarios.map((diario) => (
          <li
            key={diario.id}
            className="py-2 group flex items-center justify-between hover:bg-gray-100 rounded"
          >
            <div className="flex-1 cursor-pointer" onClick={() => onSelectDiario && onSelectDiario(diario)}>
              <span className="font-medium">{diario.data}</span>
              <span className="ml-2 text-sm text-gray-500">{diario.responsavel}</span>
              <div className="text-sm text-gray-700 truncate">{diario.resumo}</div>
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200" onClick={() => onSelectDiario && onSelectDiario(diario)}>Ver</button>
              <button className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200" onClick={() => onEdit && onEdit(diario.id)}>Editar</button>
              <button className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200" onClick={() => onDelete && onDelete(diario.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
      {diarios.length === 0 && !loading && <div>Nenhum diário cadastrado.</div>}
    </div>
  );
};

export default ObraDiariosList;
