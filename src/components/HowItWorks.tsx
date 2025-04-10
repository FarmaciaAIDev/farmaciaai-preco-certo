
import React from "react";
import { Search, BarChart3, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "Busque seu medicamento",
    description:
      "Pesquise por nome, princípio ativo ou até mesmo pela foto da receita usando nossa tecnologia de IA.",
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-primary" />,
    title: "Compare preço e disponibilidade",
    description:
      "Veja os melhores preços, promoções e disponibilidade nas farmácias próximas em tempo real.",
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-primary" />,
    title: "Finalize sua compra",
    description:
      "Escolha entre retirar na farmácia, receber em casa ou finalizar diretamente pela plataforma.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Como funciona a FarmaciaAI</h2>
          <p className="text-lg text-gray-600">
            Economize tempo e dinheiro com nossa plataforma intuitiva que compara preços e ajuda você
            a encontrar os melhores medicamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-blue-50 rounded-full">{step.icon}</div>
                <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-medium mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
