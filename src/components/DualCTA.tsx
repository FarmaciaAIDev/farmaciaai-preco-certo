
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Store } from "lucide-react";

const DualCTA = () => {
  return (
    <section className="section bg-gradient-to-br from-primary/5 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Consumer CTA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Para consumidores</h3>
            <p className="text-gray-600 mb-8">
              Economize tempo e dinheiro comparando preços de medicamentos em diversas farmácias com apenas alguns cliques.
            </p>
            <Button size="lg" className="w-full md:w-auto">Comece agora a economizar</Button>
          </div>

          {/* Pharmacy CTA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              <Store className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Para farmácias</h3>
            <p className="text-gray-600 mb-8">
              Aumente suas vendas, expanda sua visibilidade online e receba novos clientes sem custos fixos.
            </p>
            <Button size="lg" variant="outline" className="w-full md:w-auto">
              Cadastre sua farmácia gratuitamente
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualCTA;
