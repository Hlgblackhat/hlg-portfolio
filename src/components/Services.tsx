import Link from 'next/link';
import { Layout, Smartphone, ShoppingCart, Check, Zap, Server } from 'lucide-react';

export default function Services() {
    return (
        <section id="services" className="py-32 bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Soluciones Digitales.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Desde desarrollos a medida de alto rendimiento hasta soluciones rápidas y efectivas para tu negocio.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1: Custom Dev */}
                    <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Layout className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Desarrollo Web A Medida</h3>
                        <p className="text-gray-400 mb-6 flex-grow">
                            Sitios web únicos creados con tecnologías modernas (Next.js, React) para máximo rendimiento, SEO y escalabilidad.
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Diseño totalmente personalizado</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Optimización SEO avanzada</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Alto rendimiento (Core Web Vitals)</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Integración con APIs</li>
                        </ul>
                        <Link href="/services/custom-dev" className="w-full py-3 bg-white/10 rounded-xl text-center font-medium hover:bg-white text-white hover:text-black transition-colors block">
                            Cotizar Proyecto
                        </Link>
                    </div>

                    {/* Card 2: WordPress */}
                    <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Server className="w-7 h-7 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Sitios WordPress</h3>
                        <p className="text-gray-400 mb-6 flex-grow">
                            Soluciones rápidas y autoadministrables. Ideales para blogs, negocios corporativos o tiendas online.
                        </p>
                        <div className="mb-6 bg-white/5 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-2 text-sm">
                                <span className="text-gray-400">Landing Page</span>
                                <span className="font-bold text-white">Básico</span>
                            </div>
                            <div className="flex justify-between items-center mb-2 text-sm">
                                <span className="text-gray-400">Corporativo</span>
                                <span className="font-bold text-purple-400">Pro</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">E-Commerce</span>
                                <span className="font-bold text-white">Tienda</span>
                            </div>
                        </div>
                        <Link href="/services/wordpress" className="w-full py-3 bg-purple-600 rounded-xl text-center font-medium hover:bg-purple-700 text-white transition-colors block">
                            Ver Planes
                        </Link>
                    </div>

                    {/* Card 3: Restaurantes */}
                    <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 flex flex-col">
                        <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Smartphone className="w-7 h-7 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Menús Digitales QR</h3>
                        <p className="text-gray-400 mb-6 flex-grow">
                            Digitaliza tu restaurante. Menús interactivos, rápidos y fáciles de actualizar, optimizados para móviles.
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Sin descargas de Apps</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Actualización en tiempo real</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Carga instantánea (QR)</li>
                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Diseño atractivo</li>
                        </ul>
                        <Link href="/services/qr-menus" className="w-full py-3 bg-white/10 rounded-xl text-center font-medium hover:bg-white text-white hover:text-black transition-colors block">
                            Empezar
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}
