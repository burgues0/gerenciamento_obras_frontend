import React, { useEffect, useState } from 'react';
import { ObrasService } from '../../lib/api';

interface Etapa {
  id: string;
  nome: string;
  status?: string;
}

interface ObraEtapasListDashboardProps {
  obraId: string;
  onSelectEtapa?: (etapa: Etapa) => void;
  onCreate?: () => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const ObraEtapasListDashboard: React.FC<ObraEtapasListDashboardProps> = ({ obraId, onSelectEtapa, onCreate, onEdit, onDelete }) => {
  const [etapas, setEtapas] = useState<Etapa[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    ObrasService.getEtapas(obraId)
      .then(setEtapas)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [obraId]);

  return (
    <div className="border rounded p-4 bg-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Etapas da Obra</h2>
        {onCreate && (
          <button className="btn btn-primary" onClick={onCreate}>
            Nova Etapa
          </button>
        )}
      </div>
      {loading && <div>Carregando...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <ul className="divide-y">
        {etapas.map((etapa) => (
          <li key={etapa.id} className="py-2 group flex items-center justify-between hover:bg-gray-100 rounded">
            <div className="flex-1 cursor-pointer" onClick={() => onSelectEtapa && onSelectEtapa(etapa)}>
              <span className="font-medium">{etapa.nome}</span>
              <span className="ml-2 text-sm text-gray-500">{etapa.status}</span>
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200" onClick={() => onSelectEtapa && onSelectEtapa(etapa)}>Ver</button>
              <button className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200" onClick={() => onEdit && onEdit(etapa.id)}>Editar</button>
              <button className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200" onClick={() => onDelete && onDelete(etapa.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
      {etapas.length === 0 && !loading && <div>Nenhuma etapa cadastrada.</div>}
    </div>
  );
};

export default ObraEtapasListDashboard;
