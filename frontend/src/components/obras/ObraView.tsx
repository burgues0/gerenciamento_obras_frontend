"use client";


import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ObrasService } from "@/lib/api";
import { Obra } from "@/types/obras";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ObraEtapasSectionDashboard from "./ObraEtapasSectionDashboard";
import ObraDiariosSectionDashboard from "./ObraDiariosSectionDashboard";
import ObraEnderecoForm from "./ObraEnderecoForm";

export default function ObraView() {
  const params = useParams();
  const obraId = params?.id as string;
  const [obra, setObra] = useState<Obra | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [endereco, setEndereco] = useState<any>(null);
  const [showEnderecoForm, setShowEnderecoForm] = useState(false);
  const [fornecedores, setFornecedores] = useState<any[]>([]);
  const [equipamentos, setEquipamentos] = useState<any[]>([]);
  const [fiscalizacoes, setFiscalizacoes] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const [obraData, enderecoData, fornecedoresData, equipamentosData, fiscalizacoesData] = await Promise.all([
          ObrasService.getById(obraId),
          ObrasService.getEnderecoByObra(obraId),
          ObrasService.getFornecedores(obraId),
          ObrasService.getEquipamentos(obraId),
          ObrasService.getFiscalizacoes(obraId),
        ]);
        setObra(obraData);
        setEndereco(enderecoData);
        setFornecedores(fornecedoresData);
        setEquipamentos(equipamentosData);
        setFiscalizacoes(fiscalizacoesData);
      } catch (err: any) {
        setError(err.message || "Erro ao carregar detalhes da obra.");
      } finally {
        setLoading(false);
      }
    }
    if (obraId) fetchData();
  }, [obraId]);

  if (loading) return <p>Carregando detalhes...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!obra) return <p>Obra não encontrada.</p>;

  return (
    <div className="p-6 grid gap-6">
      {/* Detalhes da Obra */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="font-bold text-lg mb-4">Detalhes da Obra</h2>
        <div className="mb-2">
          <strong>Nome:</strong> {obra.nome}<br />
          <strong>Status:</strong> {obra.status}<br />
          <strong>Início:</strong> {obra.data_inicio}<br />
          <strong>Conclusão:</strong> {obra.data_conclusao || "-"}<br />
          <strong>Orçamento:</strong> R$ {obra.orcamento_total}<br />
          <strong>Gastos Atualizados:</strong> R$ {obra.gastos_atualizados}<br />
          <strong>Percentual Concluído:</strong> {obra.percentual_concluido}%<br />
          <strong>Latitude:</strong> {obra.latitude ?? "-"}<br />
          <strong>Longitude:</strong> {obra.longitude ?? "-"}<br />
        </div>
      </section>

      {/* Endereço */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="font-bold text-lg mb-4">Endereço</h2>
        {showEnderecoForm ? (
          <ObraEnderecoForm
            obraId={obraId}
            initialData={endereco}
            onSaved={async () => {
              setShowEnderecoForm(false);
              setLoading(true);
              try {
                const data = await ObrasService.getEnderecoByObra(obraId);
                setEndereco(data);
              } finally {
                setLoading(false);
              }
            }}
            onCancel={() => setShowEnderecoForm(false)}
          />
        ) : (
          <>
            {endereco ? (
              <>
                <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                  <div><b>Logradouro:</b> {endereco.logradouro || endereco.rua || '-'}</div>
                  <div><b>Número:</b> {endereco.numero || '-'}</div>
                  <div><b>Bairro:</b> {endereco.bairro || '-'}</div>
                  <div><b>Cidade:</b> {endereco.cidade || '-'}</div>
                  <div><b>UF:</b> {endereco.uf || endereco.estado || '-'}</div>
                  <div><b>CEP:</b> {endereco.cep || '-'}</div>
                  {endereco.complemento && (
                    <div className="col-span-2"><b>Complemento:</b> {endereco.complemento}</div>
                  )}
                </div>
                <Button size="sm" onClick={() => setShowEnderecoForm(true)} className="mr-2 mt-2">
                  {endereco ? 'Editar Endereço' : 'Adicionar Endereço'}
                </Button>
              </>
            ) : (
              <Button size="sm" onClick={() => setShowEnderecoForm(true)} className="mr-2 mt-2">Adicionar Endereço</Button>
            )}
          </>
        )}
      </section>

      {/* Fornecedores */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="font-bold text-lg mb-4">Fornecedores</h2>
        {fornecedores.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {fornecedores.map((f: any) => (
              <span key={f.id} className="inline-block bg-gray-100 rounded px-3 py-1 text-sm">{f.nome || f.razao_social || f.id}</span>
            ))}
          </div>
        ) : (
          <span>-</span>
        )}
      </section>

      {/* Equipamentos */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="font-bold text-lg mb-4">Equipamentos</h2>
        {equipamentos.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {equipamentos.map((e: any) => (
              <span key={e.id} className="inline-block bg-gray-100 rounded px-3 py-1 text-sm">{e.nome || e.tipo || e.id}</span>
            ))}
          </div>
        ) : (
          <span>-</span>
        )}
      </section>

      {/* Fiscalizações */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="font-bold text-lg mb-4">Fiscalizações</h2>
        {fiscalizacoes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fiscalizacoes.map((f: any) => (
              <div key={f.id} className="border rounded p-3 bg-gray-50">
                <div><b>Título:</b> {f.titulo || '-'}</div>
                <div><b>Status:</b> {f.status || '-'}</div>
                <div><b>Descrição:</b> {f.descricao || '-'}</div>
                <div><b>Início:</b> {f.data_inicio ? f.data_inicio.substring(0,10) : '-'}</div>
                <div><b>Fim:</b> {f.data_fim ? f.data_fim.substring(0,10) : '-'}</div>
                <div><b>Responsável Técnico:</b> {f.responsavelTecnico?.nome || f.responsavelTecnicoId || '-'}</div>
              </div>
            ))}
          </div>
        ) : (
          <span className="text-gray-500">não há fiscalizações atribuidas a esta obra</span>
        )}
      </section>

      {/* Seção de Etapas da Obra */}
      <section className="bg-white rounded-lg shadow p-6">
        {obraId && <ObraEtapasSectionDashboard obraId={obraId} />}
      </section>

      {/* Seção de Diários de Obra */}
      <section className="bg-white rounded-lg shadow p-6">
        {obraId && <ObraDiariosSectionDashboard obraId={obraId} />}
      </section>

      <Link href="/obras">
        <Button variant="outline" className="mt-4">Voltar</Button>
      </Link>
    </div>
  );
}
