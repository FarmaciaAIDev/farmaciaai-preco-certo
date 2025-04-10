
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Os preços são atualizados em tempo real?",
    answer:
      "Sim, nossa plataforma sincroniza os preços diretamente com as farmácias parceiras, garantindo que você sempre veja os valores atualizados. Utilizamos tecnologia avançada para manter os dados precisos e em tempo real.",
  },
  {
    question: "Como faço para comprar na plataforma?",
    answer:
      "É simples! Basta buscar os medicamentos desejados, adicionar ao carrinho e escolher como deseja finalizar sua compra: retirada na farmácia, entrega em casa ou compra direta pela plataforma. Nosso sistema guiará você em todo o processo.",
  },
  {
    question: "A FarmaciaAI é segura?",
    answer:
      "Absolutamente. Utilizamos criptografia de ponta a ponta para todas as transações, não armazenamos dados de cartão de crédito e todas as farmácias parceiras são verificadas e regulamentadas pela Anvisa.",
  },
  {
    question: "Como cadastro minha farmácia?",
    answer:
      "Para cadastrar sua farmácia, acesse a seção 'Para Farmácias' no site e preencha o formulário. Nossa equipe entrará em contato em até 48 horas para finalizar o processo de integração. Não há custos de adesão ou mensalidades.",
  },
  {
    question: "Quanto tempo leva para receber meus medicamentos?",
    answer:
      "O tempo de entrega varia conforme a farmácia escolhida e sua localização, mas geralmente as entregas são feitas em até 2 horas para regiões centrais e até 24 horas para áreas mais distantes.",
  },
  {
    question: "Posso comparar preços de medicamentos manipulados?",
    answer:
      "No momento, nossa plataforma foca em medicamentos industrializados. Estamos trabalhando para adicionar farmácias de manipulação em breve, expandindo ainda mais as opções para nossos usuários.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Perguntas frequentes</h2>
          <p className="text-lg text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre a FarmaciaAI.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
