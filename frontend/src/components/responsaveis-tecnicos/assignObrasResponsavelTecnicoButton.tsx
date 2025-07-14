"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { responsaveisTecnicosService } from "@/services/responsaveisTecnicosService";
import { obrasService } from "@/services/obrasService";
import { ResponsavelTecnico, VinculoObraResponsavel, TipoVinculoResponsavel } from "@/types/responsaveis-tecnicos";
import { Building2 } from "lucide-react";

interface Obra {
  id: number;
  nome: string;
  descricao?: string;
  status?: string;
}

interface AssignObrasResponsavelTecnicoButtonProps {
  responsavel: ResponsavelTecnico;
  onSuccess: () => void;
}

// Tipos de vínculo válidos
const TIPOS_VINCULO: TipoVinculoResponsavel[] = ["RT Geral", "RT Execução", "RT Projeto"];

export default function AssignObrasResponsavelTecnicoButton({ responsavel, onSuccess }: AssignObrasResponsavelTecnicoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [obras, setObras] = useState<Obra[]>([]);
  const [selectedObras, setSelectedObras] = useState<number[]>([]);
  const [vinculos, setVinculos] = useState<Map<number, VinculoObraResponsavel>>(new Map());
  const [filtroObras, setFiltroObras] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      loadObras();
      setFiltroObras('');
    }
  }, [isOpen]);

  const loadObras = async () => {
    try {
      const obrasData = await obrasService.getAllObras();
      console.log('Obras carregadas:', obrasData);
      
      // Valida se as obras têm IDs válidos
      const obrasValidas = obrasData.filter((obra: Obra) => obra.id && !isNaN(obra.id) && obra.id > 0);
      if (obrasValidas.length !== obrasData.length) {
        console.warn('Algumas obras têm IDs inválidos:', obrasData.filter((obra: Obra) => !obra.id || isNaN(obra.id) || obra.id <= 0));
      }
      
      setObras(obrasValidas);
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Erro ao carregar obras");
    }
  };

  // Filtra obras por nome ou ID
  const obrasDisponiveis = useMemo(() => {
    if (!filtroObras.trim()) {
      return obras;
    }

    return obras.filter(obra => 
      obra.nome.toLowerCase().includes(filtroObras.toLowerCase()) ||
      obra.id.toString().includes(filtroObras) ||
      (obra.descricao && obra.descricao.toLowerCase().includes(filtroObras.toLowerCase()))
    );
  }, [obras, filtroObras]);

  const handleToggleObra = (obraId: number) => {
    // Valida se o ID é válido antes de processar
    if (!obraId || isNaN(obraId) || obraId <= 0) {
      console.error('ID de obra inválido:', obraId);
      return;
    }
    
    setSelectedObras(prev => {
      const isSelected = prev.includes(obraId);
      
      if (isSelected) {
        // Remove obra e seu vínculo
        setVinculos(prevVinculos => {
          const newVinculos = new Map(prevVinculos);
          newVinculos.delete(obraId);
          return newVinculos;
        });
        return prev.filter(id => id !== obraId);
      } else {
        // Adiciona obra e cria vínculo vazio
        setVinculos(prevVinculos => {
          const newVinculos = new Map(prevVinculos);
          newVinculos.set(obraId, {
            obraId,
            dataInicio: "",
            dataFim: null,
            tipoVinculo: "RT Geral" as TipoVinculoResponsavel
          });
          return newVinculos;
        });
        return [...prev, obraId];
      }
    });
  };
  const handleSave = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Filtra valores inválidos e garante que só IDs válidos sejam enviados
      const validObraIds = selectedObras.filter(id => id !== undefined && id !== null && !isNaN(id) && id > 0);
      
      if (validObraIds.length === 0) {
        setError("Nenhuma obra válida selecionada");
        return;
      }
      
      // Cria array de vínculos com os dados necessários
      const vinculosArray = validObraIds.map(obraId => {
        const vinculo = vinculos.get(obraId);
        if (!vinculo) {
          throw new Error(`Vínculo não encontrado para a obra ${obraId}`);
        }
        
        // Valida se todos os campos obrigatórios estão preenchidos
        if (!vinculo.dataInicio || !vinculo.tipoVinculo) {
          const obra = obras.find(o => o.id === obraId);
          throw new Error(`Por favor, preencha os campos obrigatórios para a obra "${obra?.nome || obraId}"`);
        }
        
        // Prepara o vínculo para envio, tratando data fim opcional
        const vinculoParaEnvio = {
          obraId: vinculo.obraId,
          dataInicio: vinculo.dataInicio,
          dataFim: vinculo.dataFim || null, // Se vazio, envia null
          tipoVinculo: vinculo.tipoVinculo
        };
        
        return vinculoParaEnvio;
      });
      
      console.log('Vínculos que serão enviados:', vinculosArray);
      
      // Atualiza as obras associadas ao responsável técnico
      await responsaveisTecnicosService.assignObrasToResponsavelTecnico(responsavel.id, { vinculos: vinculosArray });

      setIsOpen(false);
      onSuccess();
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Erro ao salvar associações");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span>Obras</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-white flex flex-col">
        <DialogHeader className="text-white p-4 bg-[#F1860C] rounded-t-lg flex-shrink-0">
          <DialogTitle className="text-xl font-bold">Gerenciar Obras do Responsável Técnico</DialogTitle>
          <DialogDescription className="text-orange-100 mt-1">
            Associe ou desassocie obras e gerencie os tipos de vínculo
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100">
          {/* Seção para adicionar obras */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Gerenciar Obras</h3>
            
            {/* Campo de filtro para pesquisar obras */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Buscar obra por nome ou ID..."
                value={filtroObras}
                onChange={(e) => {
                  setFiltroObras(e.target.value);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 bg-white"
              />
              <p className="text-sm text-gray-500 mt-1">Digite para filtrar as obras disponíveis</p>
            </div>

            {/* Lista de obras disponíveis */}
            <div className="max-h-60 overflow-y-auto border rounded-md p-2 bg-white">
              {obrasDisponiveis.length > 0 ? (
                obrasDisponiveis.map((obra) => (
                  <div key={obra.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedObras.includes(obra.id)}
                        onChange={() => handleToggleObra(obra.id)}
                        className="h-4 w-4 mr-3"
                        title="Marque para associar ao responsável técnico"
                      />
                      <div>
                        <span className="font-medium">{obra.nome}</span>
                        <span className="text-sm text-gray-500 ml-2">(ID: {obra.id})</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm p-2">
                  {filtroObras 
                    ? "Nenhuma obra encontrada com esse filtro" 
                    : "Todas as obras disponíveis já estão associadas"
                  }
                </p>
              )}
            </div>
          </div>

          {/* Configuração dos vínculos para obras selecionadas */}
          {selectedObras.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Configurar Vínculos</h3>
              <div className="space-y-4 max-h-40 overflow-y-auto border rounded-md p-3 bg-white">
                {selectedObras.map((obraId) => {
                  const obra = obras.find(o => o.id === obraId);
                  const vinculo = vinculos.get(obraId);
                  
                  if (!obra || !vinculo) return null;
                  
                  return (
                    <div key={obraId} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-medium text-sm mb-2">{obra.nome}</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <Label htmlFor={`dataInicio-${obraId}`} className="text-xs">Data Início *</Label>
                          <Input
                            id={`dataInicio-${obraId}`}
                            type="date"
                            value={vinculo.dataInicio ? vinculo.dataInicio.split('T')[0] : ''}
                            onChange={(e) => {
                              const newDate = e.target.value ? new Date(e.target.value + 'T00:00:00.000Z').toISOString() : '';
                              setVinculos(prev => {
                                const newVinculos = new Map(prev);
                                newVinculos.set(obraId, { ...vinculo, dataInicio: newDate });
                                return newVinculos;
                              });
                            }}
                            className="text-xs h-8"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor={`dataFim-${obraId}`} className="text-xs">Data Fim</Label>
                          <Input
                            id={`dataFim-${obraId}`}
                            type="date"
                            value={vinculo.dataFim && vinculo.dataFim !== null ? vinculo.dataFim.split('T')[0] : ''}
                            onChange={(e) => {
                              const newDate = e.target.value ? new Date(e.target.value + 'T23:59:59.999Z').toISOString() : null;
                              setVinculos(prev => {
                                const newVinculos = new Map(prev);
                                newVinculos.set(obraId, { ...vinculo, dataFim: newDate });
                                return newVinculos;
                              });
                            }}
                            className="text-xs h-8"
                            placeholder="Opcional"
                          />
                          <p className="text-xs text-gray-500 mt-1">Deixe vazio para vínculo sem data fim</p>
                        </div>
                        <div>
                          <Label htmlFor={`tipoVinculo-${obraId}`} className="text-xs">Tipo Vínculo *</Label>
                          <Select
                            value={vinculo.tipoVinculo}
                            onValueChange={(value) => {
                              setVinculos(prev => {
                                const newVinculos = new Map(prev);
                                newVinculos.set(obraId, { ...vinculo, tipoVinculo: value as TipoVinculoResponsavel });
                                return newVinculos;
                              });
                            }}
                          >
                            <SelectTrigger className="text-xs h-8">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              {TIPOS_VINCULO.map(tipo => (
                                <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          </div>
        </div>

        {error && (
          <div className="mx-4 mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            {error}
          </div>
        )}

        <DialogFooter className="p-4 border-t bg-white flex-shrink-0">
          <Button 
            variant="outline" 
            onClick={() => setIsOpen(false)}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleSave}
            disabled={isLoading}
            className="bg-[#F1860C] hover:bg-[#d6730a] text-white"
          >
            {isLoading ? "Salvando..." : "Salvar Alterações"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
