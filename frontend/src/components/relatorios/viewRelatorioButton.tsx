"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Relatorio } from "@/types/relatorios";
import { Eye } from "lucide-react";
import { formatDate, formatDateTime } from "@/lib/utils";

// Função para extrair data de um objeto relatório
const getDateFromRelatorio = (relatorio: Relatorio): string => {
  const possibleDateFields = [
    'dataCriacao',
    'data_criacao',
    'createdAt', 
    'created_at', 
    'dataCreated', 
    'date_created',
    'createdDate'
  ];
  
  for (const field of possibleDateFields) {
    const value = relatorio[field];
    if (value !== undefined && value !== null && value !== '') {
      return String(value);
    }
  }
  
  return '';
};

interface ViewRelatorioButtonProps {
  relatorio: Relatorio;
}

const ViewRelatorioButton = ({ relatorio }: ViewRelatorioButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
        >
          <Eye className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden bg-white shadow-2xl border-0 p-0" style={{ borderRadius: '0.75rem' }}>
        <DialogHeader className="text-white p-4" style={{ background: '#F1860C', borderRadius: '0.75rem 0.75rem 0 0' }}>
          <DialogTitle className="text-xl font-bold flex items-center justify-between">
            <span>Detalhes do Relatório</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="max-h-[calc(90vh-110px)] overflow-y-auto">
          <div className="space-y-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">ID</label>
                <p className="text-sm text-gray-600">{relatorio.id}</p>
              </div>
              <div>
                <label className="text-sm font-medium">ID da Fiscalização</label>
                <p className="text-sm text-gray-600">{relatorio.fiscalizacaoId}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Título</label>
                <p className="text-sm text-gray-600">{relatorio.titulo}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Data do Relatório</label>
                <p className="text-sm text-gray-600">{formatDate(getDateFromRelatorio(relatorio))}</p>
              </div>
            </div>

            {relatorio.conteudo && (
              <div>
                <label className="text-sm font-medium">Conteúdo</label>
                <p className="text-sm text-gray-600">{relatorio.conteudo}</p>
              </div>
            )}

            {relatorio.createdAt && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Data de Criação do Sistema</label>
                  <p className="text-sm text-gray-600">{formatDateTime(relatorio.createdAt)}</p>
                </div>
                {relatorio.updatedAt && (
                  <div>
                    <label className="text-sm font-medium">Última Atualização</label>
                    <p className="text-sm text-gray-600">{formatDateTime(relatorio.updatedAt)}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewRelatorioButton;
