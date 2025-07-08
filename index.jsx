
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[80vh] flex items-center justify-center text-white" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598300057691-e08b7c228b6b")' }}>
        <div className="bg-black/50 p-6 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WA Design de Interiores</h1>
          <p className="text-lg mb-6">Móveis planejados com sofisticação e funcionalidade</p>
          <a href="https://w.app/xojrtw" target="_blank">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400">Fale conosco pelo WhatsApp</Button>
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre a WA</h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700">
          Somos especialistas em móveis planejados sob medida para transformar seus ambientes com estilo, praticidade e qualidade. Atendemos com excelência em Guarulhos/SP, oferecendo projetos personalizados para todos os tipos de espaços: cozinhas, dormitórios, salas, escritórios e muito mais.
        </p>
      </section>

      {/* Projetos */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Projetos de Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="rounded-2xl overflow-hidden shadow-md">
              <img src={`https://source.unsplash.com/600x400/?interior,room&sig=${i}`} alt="Projeto" className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <p className="text-gray-700">Projeto personalizado com foco em funcionalidade e beleza.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        <div className="flex flex-col items-center gap-4">
          <a href="https://w.app/xojrtw" target="_blank">
            <Button className="flex items-center gap-2 bg-green-500 hover:bg-green-400">
              <Phone className="w-4 h-4" /> WhatsApp
            </Button>
          </a>
          <a href="https://instagram.com/wa_designdeinteriores" target="_blank">
            <Button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-400">
              <Instagram className="w-4 h-4" /> Instagram
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
