import { Code, Brain, Globe, Wrench, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SkillsPreview = () => {
  const skillHighlights = [
    {
      icon: <Code className="text-primary" size={32} />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS',
      level: '85%'
    },
    {
      icon: <Brain className="text-primary" size={32} />,
      title: 'AI Integration',
      description: 'OpenAI API, RAG Architecture, ML',
      level: '75%'
    },
    {
      icon: <Globe className="text-primary" size={32} />,
      title: 'Full-Stack',
      description: 'Node.js, Express, REST APIs',
      level: '70%'
    },
    {
      icon: <Wrench className="text-primary" size={32} />,
      title: 'Development Tools',
      description: 'Git, GitHub, Vite, VS Code',
      level: '85%'
    }
  ];

  return (
    <section className="section-container bg-subtle/30">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Technical Expertise
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Specialized in modern web technologies with a focus on AI integration and user experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {skillHighlights.map((skill, index) => (
          <div 
            key={skill.title}
            className="glass-card p-6 rounded-xl hover-lift animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-center">
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              <div className="w-full bg-subtle rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-primary-muted h-2 rounded-full transition-all duration-1000"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link 
          to="/skills" 
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
        >
          View All Skills
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default SkillsPreview;