import Image from 'next/image';
import { Code2, Database, Globe, Terminal, Server, Cloud, Award, Github, CheckCircle2 } from 'lucide-react';

export default function About() {
    const skills = [
        'TypeScript', 'React', 'Next.js', 'Node.js', 'Go', 'PHP', 'Python',
        'Tailwind CSS', 'Docker', 'Linux/VPS', 'Git', 'SQL (MySQL/Postgres)', 'Supabase',
        'AWS', 'Azure', 'Google Cloud', 'Oracle Cloud',
    ];

    return (
        <section id="about" className="py-32 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold mb-16 text-center tracking-tight">Más allá del código.</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">

                    {/* Card 1: Main Intro - Spans 2 cols */}
                    <div className="md:col-span-2 bg-[#111111] border border-white/10 p-8 rounded-3xl flex flex-col justify-center hover:bg-[#161616] transition-colors duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Perfil Profesional</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-4">
                            Soy estudiante de ultimos semestres de <span className="text-indigo-400 font-semibold">Ingeniería de Sistemas</span> en la Universidad de Cartagena y un apasionado <span className="text-indigo-400 font-semibold">Desarrollador de Software Autodidacta</span>.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Me especializo en el desarrollo web Front-End con <span className="text-indigo-400 font-semibold">React</span> y Back-End con <span className="text-indigo-400 font-semibold">TypeScript, PHP y Go</span>. Tengo experiencia en administración de servidores Linux (VPS), scripting en Bash y manejo de bases de datos relacionales. Siempre estoy buscando nuevos retos y aprendiendo tecnologías emergentes para optimizar procesos.
                        </p>
                    </div>

                    {/* Card 2: Stack Icons */}
                    <div className="bg-[#111111] border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center gap-6 hover:bg-[#161616] transition-colors duration-300 min-h-[300px]">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-center"><Code2 className="w-8 h-8 text-blue-400" /></div>
                            <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-center"><Terminal className="w-8 h-8 text-green-400" /></div>
                            <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-center"><Database className="w-8 h-8 text-orange-400" /></div>
                            <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-center"><Cloud className="w-8 h-8 text-purple-400" /></div>
                        </div>
                        <span className="font-semibold text-gray-300">Full Stack & Cloud</span>
                    </div>

                    {/* Card 3: Philosophy */}
                    <div className="bg-gradient-to-br from-indigo-900/40 to-[#111111] border border-white/10 p-8 rounded-3xl flex flex-col justify-end relative overflow-hidden group min-h-[250px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none" />
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">Aprendizaje<br />Continuo</h3>
                        <p className="text-gray-400">Siempre dispuesto a invertir tiempo en crecer profesionalmente.</p>
                    </div>

                    {/* Card 4: Detailed Skills - Spans 2 cols */}
                    <div className="md:col-span-2 bg-[#111111] border border-white/10 p-8 rounded-3xl flex flex-col justify-center hover:bg-[#161616] transition-colors duration-300">
                        <h3 className="text-xl font-semibold mb-6 text-gray-200">Stack Tecnológico</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 5: Certifications - Spans 3 cols (Full Width) */}
                    <div className="md:col-span-3 bg-[#111111] border border-white/10 p-8 rounded-3xl hover:bg-[#161616] transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-yellow-500/10 rounded-lg">
                                <Award className="w-6 h-6 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-200">Certificaciones & Formación</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {/* AWS - Clickable Badge */}
                            <a href="https://www.credly.com/badges/0d737506-f6a6-4857-bf08-6a7576b4603d" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-colors group cursor-pointer">
                                <div className="p-2 bg-[#232F3E] rounded-xl shrink-0">
                                    <Image
                                        src="/aws-badge.png"
                                        alt="AWS Cloud Development Badge"
                                        width={40}
                                        height={40}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white group-hover:text-[#FF9900] transition-colors leading-tight">Academy Graduate: Cloud Developing Training</h4>
                                    <p className="text-sm text-gray-400">Ver Credencial Oficial</p>
                                    <span className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                                        <CheckCircle2 className="w-3 h-3" /> Completado
                                    </span>
                                </div>
                            </a>

                            {/* GitHub - In Progress */}
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 border-dashed hover:border-white/20 transition-colors opacity-80 hover:opacity-100">
                                <div className="p-3 bg-black rounded-xl shrink-0">
                                    <Github className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">GitHub Foundations</h4>
                                    <p className="text-sm text-gray-400">GitHub Education</p>
                                    <span className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> En Progreso
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
