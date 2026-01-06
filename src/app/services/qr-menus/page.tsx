import Link from 'next/link';
import { ArrowLeft, Check, Smartphone, QrCode, Utensils } from 'lucide-react';

export default function QrMenus() {
    const plans = [
        {
            name: "Básico",
            price: "$40.000",
            period: "/mes",
            description: "Perfecto para food trucks y pequeños locales.",
            features: [
                "Menú Digital (PDF o Lista Simple)",
                "Código QR personalizado",
                "Alojamiento de alta velocidad",
                "Actualizaciones mensuales (1)",
                "Soporte por WhatsApp"
            ],
            color: "green",
            recommended: false
        },
        {
            name: "Pro",
            price: "$80.000",
            period: "/mes",
            description: "Para restaurantes que cambian su carta frecuentemente.",
            features: [
                "Menú Interactivo (Categorías, Fotos)",
                "QR con diseño de marca",
                "Actualizaciones ilimitadas",
                "Link para redes sociales (Bio)",
                "Estadísticas de visitas",
                "Soporte Prioritario"
            ],
            color: "blue",
            recommended: true
        },
        {
            name: "Enterprise",
            price: "A Medida",
            period: "",
            description: "Cadenas de restaurantes o necesidades especiales.",
            features: [
                "Sistema multi-sede",
                "Integración con POS",
                "Pedidos desde la mesa (WhatsApp)",
                "Panel de administración propio",
                "Capacitación al personal"
            ],
            color: "purple",
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
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                    Menús Digitales QR
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    La forma más higiénica, moderna y eficiente de mostrar tu carta. Actualiza precios y platos en segundos sin reimprimir papel.
                </p>
            </section>

            {/* Pricing Grid */}
            <section className="pb-32 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-[#111111] border ${plan.recommended ? 'border-blue-500 shadow-2xl shadow-blue-900/20' : 'border-white/10'} rounded-3xl p-8 flex flex-col hover:transform hover:scale-105 transition-all duration-300`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Más Elegido
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold text-${plan.color}-400 mb-2`}>{plan.name}</h3>
                                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8 p-6 bg-white/5 rounded-2xl text-center">
                                <div className="flex items-end justify-center gap-1 text-white">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-gray-400 mb-1">{plan.period}</span>
                                </div>
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
                                href={`https://wa.me/573045997311?text=Hola Haider, me interesa el plan de Menú QR: ${plan.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${plan.recommended
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'bg-white text-black hover:bg-gray-200'
                                    }`}
                            >
                                Solicitar Demo
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature Highlight */}
            <section className="max-w-7xl mx-auto px-4 pb-32">
                <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6">¿Tu futuro SaaS?</h2>
                        <p className="text-gray-400 text-lg mb-6">
                            Este servicio no es solo un PDF. Estamos construyendo una plataforma completa donde podrás gestionar tus pedidos, inventario y clientes. Al contratar hoy, aseguras tu precio preferencial de "Early Adopter" para siempre.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-green-400">
                                <Check className="w-5 h-5" />
                                <span>Panel Administrativo (Beta)</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="w-64 h-64 bg-green-500/10 rounded-full flex items-center justify-center animate-pulse">
                            <QrCode className="w-32 h-32 text-green-400" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
