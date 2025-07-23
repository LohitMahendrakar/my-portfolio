import { Target, Lightbulb, Rocket, Users } from 'lucide-react';

const ServicesGoals = () => {
  const services = [
    {
      icon: <Target className="text-primary" size={32} />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['React & TypeScript', 'Responsive Design', 'Performance Optimization', 'Modern UI/UX']
    },
    {
      icon: <Lightbulb className="text-primary" size={32} />,
      title: 'AI Integration',
      description: 'Implementing intelligent solutions to solve complex problems and enhance user experiences.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'API Integration']
    },
    {
      icon: <Rocket className="text-primary" size={32} />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end application development from concept to deployment.',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Cloud Deployment']
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: 'Collaboration',
      description: 'Working with teams to deliver high-quality software solutions and contribute to open source.',
      features: ['Code Review', 'Team Collaboration', 'Agile Methodology', 'Technical Documentation']
    }
  ];

  return (
    <section className="section-container bg-subtle/30">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Services & Career Goals
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I'm currently seeking internship and job opportunities in software development. 
          I'm passionate about building intuitive and scalable web applications with a strong 
          focus on performance and modern design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className="glass-card p-8 rounded-2xl hover-lift animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Career Goals Banner */}
      <div className="glass-card p-8 rounded-2xl text-center animate-scale-in">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-muted-foreground mb-6">
            I'd love to collaborate on exciting tech projects and contribute to innovative solutions. 
            Whether it's an internship, full-time role, or collaborative project, I'm ready to bring 
            passion and dedication to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200">
              Available for Opportunities
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
              Open to Collaboration
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200">
              Ready to Learn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGoals;