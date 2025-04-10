
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "A FarmaciaAI me ajudou a economizar quase 40% nos medicamentos para hipertensão que meu pai toma todo mês. O processo é super simples e a entrega foi rápida!",
    author: "Maria Silva",
    role: "Consumidora",
    avatar: "/placeholder.svg",
    initials: "MS",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Desde que cadastramos nossa farmácia na plataforma, tivemos um aumento de 30% nas vendas. O processo de integração foi simples e o suporte é excelente.",
    author: "Carlos Oliveira",
    role: "Drogaria São Paulo",
    avatar: "/placeholder.svg",
    initials: "CO",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Precisava encontrar medicamentos para minha mãe com urgência e a FarmaciaAI me mostrou exatamente onde encontrá-los pelo melhor preço. Recomendo demais!",
    author: "Juliana Santos",
    role: "Consumidora",
    avatar: "/placeholder.svg",
    initials: "JS",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O que dizem nossos usuários</h2>
          <p className="text-lg text-gray-600">
            Ajudamos milhares de pessoas a economizar em medicamentos e farmácias a aumentar suas vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
