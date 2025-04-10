
import React from "react";
import { 
  PiggyBank, Truck, Shield, TrendingUp, Bot, Receipt 
} from "lucide-react";

const consumerBenefits = [
  {
    icon: <PiggyBank className="h-8 w-8 text-primary" />,
    title: "Economia de até 40%",
    description: "Compare preços em centenas de farmácias e escolha a melhor oferta.",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Entrega rápida",
    description: "Receba seus medicamentos no conforto da sua casa, sem filas ou esperas.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Produtos confiáveis",
    description: "Todas as farmácias parceiras são verificadas e seguem regulamentações da Anvisa.",
  },
];

const pharmacyBenefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-secondary" />,
    title: "Aumento nas vendas",
    description: "Amplie sua base de clientes e aumente o volume de vendas com nossa plataforma.",
  },
  {
    icon: <Bot className="h-8 w-8 text-secondary" />,
    title: "Atendimento automatizado",
    description: "Receba pedidos processados automaticamente, integrando com seu sistema.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-secondary" />,
    title: "Comissão por venda",
    description: "Sem mensalidades. Pague apenas uma pequena taxa sobre vendas concretizadas.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefícios para todos</h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma foi desenvolvida para trazer vantagens tanto para consumidores quanto para farmácias parceiras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Consumer Benefits */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold mb-8 text-center">Para Consumidores</h3>
            <div className="space-y-8">
              {consumerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 p-2 rounded-lg bg-white shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pharmacy Benefits */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold mb-8 text-center">Para Farmácias</h3>
            <div className="space-y-8">
              {pharmacyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 p-2 rounded-lg bg-white shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
