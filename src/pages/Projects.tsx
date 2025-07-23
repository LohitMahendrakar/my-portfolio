import { ExternalLink, Github, Brain, Home, Image } from 'lucide-react';
import Header from '@/components/Header';

const Projects = () => {
  const projects = [
    {
      title: 'DocuMind – AI PDF Assistant',
      description: 'Full-stack AI application using React and RAG (Retrieval-Augmented Generation) architecture, allowing users to query PDFs using natural language. Built with modern web technologies and AI integration.',
      technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'RAG Architecture', 'PDF Processing'],
      icon: <Brain className="text-primary" size={24} />,
      features: [
        'Natural language PDF querying',
        'AI-powered document analysis',
        'Real-time response generation',
        'User-friendly interface'
      ],
      status: 'Completed',
      category: 'AI/ML'
    },
    {
      title: 'Real Estate Price Estimator',
      description: 'Machine learning project built with Google Colab that uses multi-input ML model to predict housing prices using both tabular data and satellite images for comprehensive property analysis.',
      technologies: ['Python', 'Google Colab', 'TensorFlow', 'Pandas', 'Satellite Imagery', 'ML'],
      icon: <Home className="text-primary" size={24} />,
      features: [
        'Multi-input data processing',
        'Satellite image analysis',
        'Accurate price predictions',
        'Data visualization'
      ],
      status: 'Completed',
      category: 'Machine Learning'
    },
    {
      title: 'AI Image Generator',
      description: 'React application utilizing OpenAI API to generate AI-based images from user input prompts. Features modern UI built with Tailwind CSS and seamless integration with AI services.',
      technologies: ['React', 'Tailwind CSS', 'OpenAI API', 'JavaScript', 'REST API'],
      icon: <Image className="text-primary" size={24} />,
      features: [
        'Text-to-image generation',
        'Customizable prompts',
        'High-quality outputs',
        'Responsive design'
      ],
      status: 'Completed',
      category: 'Web Development'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-container">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing my passion for building innovative solutions that solve real-world problems.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-container">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card p-8 rounded-2xl hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                          <div className="flex gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                              {project.status}
                            </span>
                            <span className="px-3 py-1 bg-subtle text-muted-foreground text-xs font-medium rounded-full">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-primary/5 text-primary border border-primary/20 rounded-lg text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <button className="btn-professional inline-flex items-center gap-2">
                        <ExternalLink size={18} />
                        View Live Demo
                      </button>
                      <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2">
                        <Github size={18} />
                        View Code
                      </button>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-muted/20 rounded-lg flex items-center justify-center border border-primary/10">
                      <div className="text-center p-4">
                        {project.icon}
                        <p className="text-xs text-muted-foreground mt-2">Project Screenshot</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-container">
          <div className="glass-card p-8 rounded-2xl text-center animate-scale-in">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Want to see more?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/LohitMahendrakar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-professional inline-flex items-center gap-2"
              >
                <Github size={18} />
                View All Projects on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;