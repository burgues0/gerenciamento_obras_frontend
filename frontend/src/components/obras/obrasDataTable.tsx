"use client";

import { useState, useMemo } from "react";
import { Obra } from "@/types/obras";

interface ObrasDataTableProps {
  obras: Obra[];
  onDeleteSuccess: () => void;
}

export default function ObrasDataTable({ obras }: ObrasDataTableProps) {
  const [filter] = useState('');

  const filteredObras = useMemo(() => {
    if (!filter) return obras;
    const lowercasedFilter = filter.toLowerCase();
    return obras.filter(obra =>
      obra.nome.toLowerCase().includes(lowercasedFilter) ||
      obra.status.toLowerCase().includes(lowercasedFilter) ||
      obra.data_inicio.includes(lowercasedFilter) ||
      (obra.data_conclusao && obra.data_conclusao.includes(lowercasedFilter))
    );
  }, [obras, filter]);

  return (
    <div>
      <p>teste</p>
    </div>
  );
}