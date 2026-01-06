import Link from 'next/link';
import { ArrowLeft, Code2, Database, Rocket, Layout, CheckCircle2 } from 'lucide-react';

export default function CustomDev() {
    const steps = [
        {
            icon: <Layout className="w-8 h-8 text-blue-400" />,
            title: "1. Análisis y Diseño",
            description: "Entendemos tu negocio y diseñamos una arquitectura escalable y una interfaz de usuario impactante."
        },
        {
            icon: <Code2 className="w-8 h-8 text-purple-400" />,
            title: "2. Desarrollo Ágil",
            description: "Construimos tu software utilizando las últimas tecnologías (Next.js, Node.js, Cloud) con entregas continuas."
        },
        {
            icon: <Database className="w-8 h-8 text-green-400" />,
            title: "3. Integración y Pruebas",
            description: "Conectamos pasarelas de pago, APIs externas y aseguramos la calidad con pruebas exhaustivas."
        },
        {
            icon: <Rocket className="w-8 h-8 text-orange-400" />,
            title: "4. Despliegue y Soporte",
            description: "Lanzamos tu producto a la nube y ofrecemos soporte técnico para garantizar su funcionamiento."
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
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
                    Software a la Medida
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    No te conformes con plantillas. Creamos soluciones tecnológicas únicas diseñadas específicamente para optimizar tus procesos y escalar tu negocio.
                </p>
                <a
                    href="https://wa.me/573045997311?text=Hola Haider, quiero cotizar un desarrollo a medida."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-blue-600 rounded-full font-bold text-white hover:bg-blue-700 transition-colors inline-block"
                >
                    Agendar Asesoría Gratuita
                </a>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">¿Cómo trabajamos?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-[#111111] p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                                <div className="mb-4 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Custom? */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir desarrollo a medida?</h2>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg">Escalabilidad Total</h4>
                                <p className="text-gray-400">Tu software crece con tu negocio. Sin límites de usuarios o transacciones impuestos por terceros.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg">Propiedad Intelectual</h4>
                                <p className="text-gray-400">El código es 100% tuyo. No dependes de licencias mensuales costosas ni de plataformas que pueden cerrar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg">ventaja Competitiva</h4>
                                <p className="text-gray-400">Implementa funcionalidades únicas que tu competencia no tiene con software genérico.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
