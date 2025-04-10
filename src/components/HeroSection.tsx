
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Bot } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Compare preços de medicamentos com{" "}
              <span className="text-primary">inteligência artificial</span>
            </h1>
            <p className="text-xl text-gray-600">
              Crie sua cesta de compras e finalize nas farmácias com melhor preço e disponibilidade.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="text-lg px-8">
                Começar agora
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Para farmácias
              </Button>
            </div>
            <div className="pt-4 flex items-center text-sm text-gray-500">
              <span className="flex items-center">
                <Bot className="h-4 w-4 mr-1 text-primary" />
                Powered by AI
              </span>
              <span className="mx-3">•</span>
              <span>Economia de até 40%</span>
              <span className="mx-3">•</span>
              <span>+500 farmácias</span>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 relative z-10 transform md:translate-y-8">
              <div className="absolute -top-4 -right-4 bg-secondary text-white text-sm font-medium py-1 px-3 rounded-full">
                IA recomenda
              </div>

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Medicina Comparada</h3>
                <Search className="h-5 w-5 text-primary" />
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-start">
                  <div className="bg-primary h-10 w-10 rounded-md flex items-center justify-center text-white mr-3 flex-shrink-0">
                    Rx
                  </div>
                  <div>
                    <h4 className="font-medium">Omeprazol 20mg</h4>
                    <div className="text-sm text-gray-500">Genérico • Cápsula • 30 unid.</div>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="text-sm text-primary font-medium">R$ 15,90</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        Menor preço
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 flex items-start">
                  <div className="bg-gray-200 h-10 w-10 rounded-md flex items-center justify-center text-gray-700 mr-3 flex-shrink-0">
                    Rx
                  </div>
                  <div className="w-full">
                    <h4 className="font-medium">Losartana 50mg</h4>
                    <div className="text-sm text-gray-500">Genérico • Comprimido • 30 unid.</div>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="text-sm text-primary font-medium">R$ 12,50</div>
                      <div className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        Em promoção
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <div className="flex items-center">
                    <ShoppingCart className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm font-medium">2 itens no carrinho</span>
                  </div>
                  <div className="text-sm text-primary font-medium">R$ 28,40</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full opacity-50 filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
