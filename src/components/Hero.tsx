import Image from 'next/image';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-black pt-16 overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 text-center px-4 flex flex-col items-center">
                {/* Real Avatar */}
                <div className="w-60 h-60 mb-8 rounded-full bg-gradient-to-b from-gray-800 to-black flex items-center justify-center border-2 border-indigo-500/30 shadow-2xl overflow-hidden relative animate-bounce-slow">
                    <Image
                        src="/PhotoHaider.jpg"
                        alt="Haider Lopez"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-6 leading-tight">
                    Haider López.
                </h1>
                <p className="text-2xl md:text-3xl text-gray-400 font-medium max-w-3xl mx-auto mb-10 tracking-tight">
                    Estudiante de Ingeniería de Sistemas. <br className="hidden md:block" />
                    <span className="text-white">Desarrollador Full Stack.</span>
                </p>

                <div className="flex gap-4">
                    <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-200">
                        Ver Proyectos
                    </a>
                    <a href="#contact" className="px-8 py-4 bg-gray-900/50 backdrop-blur-md text-white border border-gray-800 rounded-full font-semibold text-lg hover:bg-gray-900 transition-colors">
                        Contactar
                    </a>
                </div>
            </div>
        </section>
    );
}
