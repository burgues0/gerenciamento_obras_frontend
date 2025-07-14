"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { relatoriosService } from "@/services/relatoriosService";
import { Relatorio, UpdateRelatorioDto } from "@/types/relatorios";
import { Edit } from "lucide-react";

interface EditRelatorioButtonProps {
  relatorio: Relatorio;
  onSuccess: () => void;
}

const EditRelatorioButton = ({ relatorio, onSuccess }: EditRelatorioButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<UpdateRelatorioDto>({
    titulo: '',
    fiscalizacaoId: undefined,
    conteudo: '',
    dataCriacao: ''
  });

  // Inicializa a data quando o modal é aberto
  useEffect(() => {
    if (isOpen) {
      // Mantém todos os campos vazios para permitir edição livre
      setFormData({
        titulo: '',
        fiscalizacaoId: undefined,
        conteudo: '',
        dataCriacao: ''
      });
      setError(null);
    }
  }, [isOpen, relatorio]);

  // Função para extrair data do relatório
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
      if (relatorio[field] !== undefined && relatorio[field] !== null && relatorio[field] !== '') {
        return String(relatorio[field]);
      }
    }
    
    return '';
  };

  const formatDateForInput = (dateString: string): string => {
    if (!dateString) {
      return '';
    }
    try {
      if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        return dateString;
      }
      
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return '';
      }
      
      const formatted = date.toISOString().split('T')[0];
      return formatted;
    } catch (error) {
      return '';
    }
  };

  const handleInputChange = (field: keyof UpdateRelatorioDto, value: string | number | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Remove a mensagem de erro quando o usuário começa a digitar
    if (error) {
      setError(null);
    }
  };

  const resetForm = () => {
    setFormData({
      titulo: '',
      fiscalizacaoId: undefined,
      conteudo: '',
      dataCriacao: ''
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verifica se pelo menos um campo foi preenchido
    const hasAnyField = !!(
      (formData.titulo && formData.titulo.trim() !== '') ||
      (formData.fiscalizacaoId && formData.fiscalizacaoId > 0) ||
      (formData.conteudo && formData.conteudo.trim() !== '') ||
      (formData.dataCriacao && formData.dataCriacao.trim() !== '')
    );

    if (!hasAnyField) {
      setError('Pelo menos um campo deve ser preenchido para salvar as alterações.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Prepara os dados para envio, incluindo apenas os campos preenchidos
      const updateData: UpdateRelatorioDto = {};

      if (formData.titulo && formData.titulo.trim() !== '') {
        updateData.titulo = formData.titulo;
      }

      if (formData.fiscalizacaoId && formData.fiscalizacaoId > 0) {
        updateData.fiscalizacaoId = formData.fiscalizacaoId;
      }

      if (formData.conteudo && formData.conteudo.trim() !== '') {
        updateData.conteudo = formData.conteudo;
      }

      // Só inclui dataCriacao se foi preenchida, convertendo para formato ISO
      if (formData.dataCriacao && formData.dataCriacao.trim() !== '') {
        // Converte "YYYY-MM-DD" para formato ISO string
        const date = new Date(formData.dataCriacao + 'T00:00:00.000Z');
        updateData.dataCriacao = date.toISOString();
      }

      await relatoriosService.updateRelatorio(relatorio.id, updateData);
      setIsOpen(false);
      
      setTimeout(() => {
        onSuccess();
      }, 100);
    } catch (err: unknown) {
      let errorMessage = 'Erro ao atualizar relatório';
      
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      } else if (err && typeof err === 'object' && 'message' in err) {
        errorMessage = (err as any).message;
      } else {
        errorMessage = 'Erro desconhecido ao atualizar relatório';
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      // Reset form com campos vazios
      setFormData({
        titulo: '',
        fiscalizacaoId: undefined,
        conteudo: '',
        dataCriacao: ''
      });
      setError(null);
    } else {
      resetForm();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
        >
          <Edit className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden bg-white shadow-2xl border-0 p-0" style={{ borderRadius: '0.75rem' }}>
        <DialogHeader className="text-white p-4" style={{ background: '#F1860C', borderRadius: '0.75rem 0.75rem 0 0' }}>
          <DialogTitle className="text-xl font-bold">Editar Relatório</DialogTitle>
        </DialogHeader>
        
        <div className="max-h-[calc(90vh-110px)] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="titulo" className="text-slate-700 font-medium">Título</Label>
                <Input
                  id="titulo"
                  value={formData.titulo}
                  onChange={(e) => handleInputChange('titulo', e.target.value)}
                  placeholder="Digite o título do relatório"
                  className="border-slate-300 focus:border-[#F1860C] focus:ring-[#F1860C]/20 bg-white h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataCriacao" className="text-slate-700 font-medium">Data do Relatório</Label>
                <Input
                  id="dataCriacao"
                  type="date"
                  value={formData.dataCriacao || ''}
                  onChange={(e) => handleInputChange('dataCriacao', e.target.value)}
                  className="border-slate-300 focus:border-[#F1860C] focus:ring-[#F1860C]/20 bg-white h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fiscalizacaoId" className="text-slate-700 font-medium">ID da Fiscalização</Label>
                <Input
                  id="fiscalizacaoId"
                  type="number"
                  value={formData.fiscalizacaoId || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    handleInputChange('fiscalizacaoId', value ? parseInt(value) : undefined);
                  }}
                  placeholder="Digite o ID da fiscalização"
                  className="border-slate-300 focus:border-[#F1860C] focus:ring-[#F1860C]/20 bg-white h-10"
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conteudo" className="text-slate-700 font-medium">Conteúdo</Label>
                <textarea
                  id="conteudo"
                  value={formData.conteudo}
                  onChange={(e) => handleInputChange('conteudo', e.target.value)}
                  placeholder="Digite o conteúdo do relatório"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1860C]/20 focus:border-[#F1860C] resize-vertical min-h-[100px] bg-white"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mx-6 mb-6">
                <p className="text-red-800 font-medium">Erro ao atualizar relatório</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
              </div>
            )}

            <DialogFooter className="flex gap-3 pt-6 border-t border-slate-200 px-6 pb-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleClose}
                disabled={isLoading}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="text-white font-semibold px-8 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#F1860C' }}
              >
                {isLoading ? 'Salvando...' : 'Salvar Alterações'}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditRelatorioButton;
