
import React from "react";
import { Button } from "@/components/ui/button";
import { MedicalCross, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container-custom mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center text-primary font-bold text-2xl">
            <MedicalCross className="mr-2 h-6 w-6" />
            <span>FarmaciaAI</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#como-funciona" className="text-gray-600 hover:text-primary transition duration-200">
            Como funciona
          </a>
          <a href="#beneficios" className="text-gray-600 hover:text-primary transition duration-200">
            Benefícios
          </a>
          <a href="#faq" className="text-gray-600 hover:text-primary transition duration-200">
            FAQ
          </a>
          <Button variant="outline" className="mr-2">
            Para farmácias
          </Button>
          <Button>Começar agora</Button>
        </nav>

        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-16 left-0 px-4 py-5 shadow-lg border-b border-gray-100">
          <div className="flex flex-col space-y-4">
            <a
              href="#como-funciona"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Como funciona
            </a>
            <a
              href="#beneficios"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Benefícios
            </a>
            <a
              href="#faq"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <Button variant="outline" className="w-full justify-center" onClick={toggleMenu}>
              Para farmácias
            </Button>
            <Button className="w-full justify-center" onClick={toggleMenu}>
              Começar agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
