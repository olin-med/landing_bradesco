// src/components/Footer.tsx
import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
return (
    <footer className="bg-[#7c0311] text-gray-200 py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
        <h4 className="text-xl font-bold mb-4">Sobre Nós</h4>
        <p className="text-sm leading-relaxed">
            Somos especialistas em planos de saúde empresariais, oferecendo soluções
            sob medida para pequenas e grandes empresas há mais de 20 anos.
        </p>
        </div>

        {/* Quick Links */}
        <div>
        <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
        <ul className="space-y-2 text-sm">
            <li>
            <a href="#home" className="hover:text-white transition">
                Home
            </a>
            </li>
            <li>
            <a href="#benefits" className="hover:text-white transition">
                Benefícios
            </a>
            </li>
            <li>
            <a href="#categories" className="hover:text-white transition">
                Categorias
            </a>
            </li>
            <li>
            <a href="#contact" className="hover:text-white transition">
                Contato
            </a>
            </li>
        </ul>
        </div>

        {/* Contact & Social */}
        <div>
        <h4 className="text-xl font-bold mb-4">Fale Conosco</h4>
        <p className="text-sm mb-4">
            Rua Exemplo, 123<br />
            São Paulo, SP<br />
            (11) 5555-1234
        </p>
        <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaWhatsapp className="hover:text-white text-green-400 transition" size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF className="hover:text-white text-blue-600 transition" size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram className="hover:text-white text-purple-600 transition" size={20} />
            </a>
        </div>
        </div>
    </div>

    <div className="border-t border-white mt-8 pt-6 text-center text-xs text-white">
        © {new Date().getFullYear()} Sua Empresa de Saúde. Todos os direitos reservados.
    </div>
    </footer>
);
};

export default Footer;
