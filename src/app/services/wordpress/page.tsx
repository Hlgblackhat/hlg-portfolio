import Link from 'next/link';
import { Check, ArrowLeft, Shield, Zap, Globe, Smartphone } from 'lucide-react';

export default function WordPressPlans() {
    const plans = [
        {
            name: "Landing Page",
            price: "$450.000",
            description: "Ideal para campañas publicitarias, eventos o perfiles personales.",
            features: [
                "Diseño (One-Page) personalizado",
                "Formulario de contacto",
                "Optimización de velocidad básica",
                "Integración con redes sociales",
                "Responsive Design (Móvil/PC)",
                "Soporte por 1 mes"
            ],
            color: "blue",
            recommended: false
        },
        {
            name: "Corporativo",
            price: "$1.200.000",
            description: "Para empresas que necesitan mostrar sus servicios y generar confianza.",
            features: [
                "Hasta 5 páginas internas",
                "Blog/Noticias autoadministrable",
                "SEO On-Page intermedio",
                "Optimización de seguridad",
                "Integración con Google Maps/Analytics",
                "Chat de WhatsApp flotante",
                "Soporte por 3 meses"
            ],
            color: "purple",
            recommended: true
        },
        {
            name: "E-Commerce",
            price: "$2.500.000+",
            description: "Tienda en línea completa para vender productos físicos o digitales.",
            features: [
                "Catálogo de productos ilimitado",
                "Carro de compras y pasarela de pagos",
                "Gestión de inventario y pedidos",
                "Panel de cliente",
                "SEO para E-commerce",
                "Capacitación de uso (Video)",
                "Soporte por 6 meses"
            ],
            color: "green",
            recommended: false
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Navbar Simple */}
            <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Volver al inicio</span>
                </Link>
                <span className="font-bold text-xl">hlgcodes</span>
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-green-400">
                    Planes WordPress
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Soluciones robustas, escalables y fáciles de administrar. Elige el paquete que mejor se adapte a tu crecimiento.
                </p>
            </section>

            {/* Pricing Grid */}
            <section className="pb-32 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-[#111111] border ${plan.recommended ? 'border-purple-500 shadow-2xl shadow-purple-900/20' : 'border-white/10'} rounded-3xl p-8 flex flex-col hover:transform hover:scale-105 transition-all duration-300`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Más Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold text-${plan.color}-400 mb-2`}>{plan.name}</h3>
                                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8 p-6 bg-white/5 rounded-2xl text-center">
                                <span className="text-gray-500 text-sm block mb-1">Desde</span>
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className={`w-5 h-5 text-${plan.color}-400 shrink-0`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/573045997311?text=Hola Haider, estoy interesado en el plan WordPress: ${plan.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${plan.recommended
                                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                    : 'bg-white text-black hover:bg-gray-200'
                                    }`}
                            >
                                Contratar Plan
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-4 pb-32">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="font-bold mb-2">Seguridad Garantizada</h3>
                        <p className="text-gray-400 text-sm">Implementación de certificados SSL y protección contra ataques básicos.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-6 h-6 text-green-400" />
                        </div>
                        <h3 className="font-bold mb-2">Velocidad Optimizada</h3>
                        <p className="text-gray-400 text-sm">Configuración de caché y optimización de imágenes para carga rápida.</p>
                    </div>
                    <div className="p-6">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Smartphone className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="font-bold mb-2">100% Responsivo</h3>
                        <p className="text-gray-400 text-sm">Tu sitio se verá perfecto en celulares, tablets y computadoras.</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
