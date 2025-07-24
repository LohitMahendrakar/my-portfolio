import { Code, Database, Globe, Wrench } from 'lucide-react';
import Header from '@/components/Header';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-primary" size={28} />,
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'C++', level: 90 },
        { name: 'python', level: 90 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Globe className="text-primary" size={28} />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 70 },
        { name: 'Three.js', level: 60 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-primary" size={28} />,
      skills: [
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'Vite', level: 75 },
        { name: 'Google Colab', level: 70 },
        { name: 'VS Code', level: 90 },
      ]
    },
    {
      title: 'Specializations',
      icon: <Database className="text-primary" size={28} />,
      skills: [
        { name: 'AI Integration', level: 75 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Full-Stack Development', level: 75 },
        { name: 'Machine Learning', level: 65 },
      ]
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
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="glass-card p-8 rounded-2xl hover-lift animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-subtle rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary-muted h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        
        {/* Learning Journey */}
        <section className="section-container">
          <div className="text-center glass-card p-8 rounded-2xl animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Continuous Learning Journey
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              As a passionate developer, I'm always expanding my skillset and staying updated 
              with the latest technologies and best practices in software development.
            </p>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default Skills;