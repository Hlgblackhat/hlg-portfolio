import { Github, ExternalLink, Gitlab } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    color: string;
    link?: string;
}

export default function ProjectCard({ title, description, tags, color, link }: ProjectCardProps) {
    const Component = link ? 'a' : 'div';
    const linkProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

    // Helper to determine icon based on link URL
    const PlatformIcon = () => {
        if (!link) return <Github className="w-5 h-5" />;
        const lowerLink = link.toLowerCase();
        if (lowerLink.includes('gitlab')) return <Gitlab className="w-5 h-5" />;
        // Note: Bitbucket icon might not be standard in all lucide versions, checking usage. 
        // If not available, we map to Git or fallback. Assuming standard setup.
        // Actually, let's stick to Github/Gitlab for now as requested examples, 
        // or finding a generic 'Code' icon if unknown. 
        // Retaining Github as default for "code" concept if generic.
        return <Github className="w-5 h-5" />;
    };

    return (
        <Component
            {...linkProps}
            className={`group relative bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors duration-500 block h-full text-left ${link ? 'cursor-pointer' : ''}`}
        >
            {/* Background Gradient Effect */}
            <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-${color}-500/10 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none group-hover:bg-${color}-500/20 transition-colors duration-500`} />

            <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center`}>
                        <div className={`w-6 h-6 rounded-full bg-${color}-500/50`} />
                    </div>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="text-gray-400 hover:text-white transition-colors"><PlatformIcon /></div>
                        <div className="text-gray-400 hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">{title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Component>
    );
}
