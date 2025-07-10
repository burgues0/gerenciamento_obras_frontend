import Image from "next/image";
import AppLayout from "@/components/layout-components/applayout";

export default function Home() {
  return (
    <AppLayout>
      <div className="text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Página Inicial</h1>
        <p className="mb-4">conteúdo principal. dentro do maincontent.</p>
        <p className="mb-4">header, sidebar e footer visível em todas as pag</p>
        <div className="relative w-full h-[220px] min-h-[220px]">
          <Image
            src="/capa.png"
            alt="Capa obra"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-40 w-full" style={{ maxWidth: 800 }}>
            <h2 className="text-xl font-extrabold text-white mb-1 leading-tight drop-shadow-lg text-left">Indústria<br />Inovação e<br />Infraestrutura</h2>
            <div className="h-4" />
            <p className="text-white text-sm font-medium drop-shadow-md text-left">Cada etapa sob control.<br />Cada obra no caminho certo!</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}