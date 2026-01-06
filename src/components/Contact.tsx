import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-black text-white border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                    Hablemos.
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                    ¿Interesado en una colaboración o tienes un proyecto en mente? Estoy disponible para nuevos retos.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
                    <a href="mailto:haiderlg@outlook.com" className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>haiderlg@outlook.com</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="flex justify-center gap-12 border-t border-white/5 pt-12">
                    <a href="https://github.com/hlgblackhat" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                        <span className="text-sm">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/haider-a-lopez-g/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors">
                        <Linkedin className="w-6 h-6" />
                        <span className="text-sm">LinkedIn</span>
                    </a>
                </div>

                <footer className="mt-24 text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} hlgcodes.</p>
                    <p className="mt-2">Cartagena, Colombia.</p>
                </footer>
            </div>
        </section>
    );
}
