import { Brain, Home, Image, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: 'DocuMind – AI PDF Assistant',
      description: 'Full-stack AI app using React and RAG architecture for natural language PDF querying.',
      technologies: ['React', 'TypeScript', 'OpenAI API', 'RAG'],
      icon: <Brain className="text-primary" size={24} />,
      category: 'AI/ML',
      gradient: 'from-blue-500/20 to-purple-500/20',
      // githubUrl: 'https://github.com/LohitMahendrakar/documind-ai' // 🔗 ADD GITHUB LINK
    },
    {
      title: 'Gold Price Predictor',
      description: 'Machine Learning model to forecast gold prices using historical market data and trends.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'ML'],
      icon: <Brain className="text-primary" size={24} />,
      category: 'Machine Learning',
      gradient: 'from-yellow-400/20 to-orange-500/20',
      githubUrl: 'https://github.com/LohitMahendrakar/ml-gold-price-predictor'
    },
    {
      title: 'AI Image Generator',
      description: 'React app utilizing OpenAI API for AI-based image generation from text prompts.',
      technologies: ['React', 'Tailwind CSS', 'OpenAI API'],
      icon: <Image className="text-primary" size={24} />,
      category: 'Web Development',
      gradient: 'from-purple-500/20 to-pink-500/20',
      // githubUrl: 'https://github.com/LohitMahendrakar/ai-image-generator' // 🔗 ADD GITHUB LINK
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Showcasing innovative solutions that demonstrate my passion for building impactful technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.title}
            className="glass-card rounded-2xl overflow-hidden hover-lift animate-slide-up group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Project Header */}
            <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
              <div className="relative z-10 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                {project.icon}
              </div>
              <span className="absolute top-4 right-4 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                {project.category}
              </span>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link Button */}
             <div className="flex pt-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link 
          to="/projects" 
          className="btn-professional inline-flex items-center gap-2 group"
        >
          View All Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
