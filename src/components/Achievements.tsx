import { Quote, Star, Award, Calendar } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="text-primary" size={24} />,
      title: 'Self-Taught Developer',
      description: 'Transitioned from Mechanical Engineering to Software Development',
      year: '2023'
    },
    {
      icon: <Star className="text-primary" size={24} />,
      title: 'AI Integration Specialist',
      description: 'Successfully implemented RAG architecture in production',
      year: '2024'
    },
    {
      icon: <Calendar className="text-primary" size={24} />,
      title: 'Active Learner',
      description: 'Continuously expanding skillset with modern technologies',
      year: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      quote: "Lohit's passion for technology and quick learning ability make him a valuable addition to any development team.",
      author: "Future Colleague",
      role: "Looking forward to collaboration"
    },
    {
      quote: "His projects demonstrate a strong understanding of modern web development and AI integration principles.",
      author: "Tech Community",
      role: "Open Source Enthusiast"
    }
  ];

  return (
    <section className="section-container bg-subtle/30">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Achievements */}
        <div className="animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="text-primary" size={32} />
            Key Milestones
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="glass-card p-6 rounded-xl hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                      <span className="text-sm text-primary font-medium">{achievement.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Quote className="text-primary" size={32} />
            Community Voice
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl"
              >
                <Quote className="text-primary mb-4" size={20} />
                <p className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-glass-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="glass-card p-6 rounded-xl mt-6">
            <h3 className="font-semibold text-foreground mb-4">Quick Stats</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">1+</p>
                <p className="text-xs text-muted-foreground">Years Coding</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">∞</p>
                <p className="text-xs text-muted-foreground">Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;