"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Command } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center justify-between h-14 px-6 rounded-full transition-all duration-300 ${scrolled
                        ? 'bg-white/10 backdrop-blur-md border border-white/10 shadow-lg'
                        : 'bg-transparent'
                        }`}
                >
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/hlg-logo.png"
                                alt="hlgcodes logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight">hlgcodes</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-1">
                            {['Inicio', 'Sobre Mí', 'Servicios', 'Proyectos', 'Contacto'].map((item) => {
                                let href = '';
                                switch (item) {
                                    case 'Inicio': href = '#hero'; break;
                                    case 'Sobre Mí': href = '#about'; break;
                                    case 'Servicios': href = '#services'; break;
                                    case 'Proyectos': href = '#projects'; break;
                                    case 'Contacto': href = '#contact'; break;
                                    default: href = '#';
                                }
                                return (
                                    <Link
                                        key={item}
                                        href={href}
                                        className="text-sm text-gray-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 font-medium"
                                    >
                                        {item}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-4">
                    <div className="flex flex-col space-y-4 px-4 pb-6 pt-2">
                        {['Inicio', 'Sobre Mí', 'Servicios', 'Proyectos', 'Contacto'].map((item) => {
                            let href = '';
                            switch (item) {
                                case 'Inicio': href = '#hero'; break;
                                case 'Sobre Mí': href = '#about'; break;
                                case 'Servicios': href = '#services'; break;
                                case 'Proyectos': href = '#projects'; break;
                                case 'Contacto': href = '#contact'; break;
                                default: href = '#';
                            }
                            return (
                                <Link
                                    key={item}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-white text-lg font-medium block py-2"
                                >
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
