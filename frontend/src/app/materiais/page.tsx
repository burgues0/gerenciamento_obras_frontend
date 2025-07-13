"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from '@/components/layout-components/applayout';
import { materiaisService } from "@/services/materiaisService";
import { Material } from "@/types/materiais";
import MateriaisDataTable from "@/components/materiais/materiaisDataTable";
import CreateMaterialButton from "@/components/materiais/createMaterialButton";

export default function MateriaisPage() {
  const [materiais, setMateriais] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMateriais = async () => {
    try {
      setLoading(true);
      const data = await materiaisService.getAllMateriais();
      
      const sortedData = data.sort((a, b) => a.id - b.id);
      setMateriais(sortedData);
      setError(null);
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Erro ao carregar materiais");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMateriais();
  }, []);

  const handleSuccess = () => {
    loadMateriais();
  };

  return (
    <AppLayout>
      <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        {/* Header da Página */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Materiais</h1>
            <p className="text-gray-600">Gerencie os materiais cadastrados no sistema</p>
          </div>
          <CreateMaterialButton onSuccess={handleSuccess} />
        </div>

        {/* Card Principal */}
        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader style={{ background: '#2C607A' }} className="text-white rounded-t-lg py-3">
            <CardTitle className="text-xl font-semibold">
              Lista de Materiais
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {loading && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
                <p className="text-gray-600 text-lg">Carregando materiais...</p>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-red-800 font-medium">Erro ao carregar materiais</p>
                    <p className="text-red-600 text-sm mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            {!loading && !error && (
              <MateriaisDataTable 
                materiais={materiais} 
                onSuccess={handleSuccess} 
              />
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
