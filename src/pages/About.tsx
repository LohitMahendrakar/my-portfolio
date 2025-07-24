import { GraduationCap, Code, Target } from 'lucide-react';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-container">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get to know more about my journey, passion for technology, and what drives me forward.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Section */}
            <div className="space-y-8 animate-slide-up">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Code className="text-primary" size={28} />
                  My Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm Lohit Mahindrakar, a passionate and driven software developer currently 
                    pursuing a Bachelor's degree in Mechanical Engineering (2023–2027). While my 
                    academic background is in mechanical engineering, my heart lies in the world 
                    of code and innovation.
                  </p>
                  <p>
                    With a deep interest in web technologies and AI, I constantly seek to solve 
                    real-world problems through code. I believe that technology has the power to 
                    transform lives and create meaningful impact in our society.
                  </p>
                  <p>
                    My goal is to build impactful tools and applications that make a difference, 
                    while becoming an active contributor to the tech community. I'm always eager 
                    to learn new technologies and take on challenging projects that push my 
                    boundaries.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Target className="text-primary" size={24} />
                  What Drives Me
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Building scalable and user-friendly applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Integrating AI to solve complex problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Contributing to open-source projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Continuous learning and skill development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education & Timeline */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Education */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <GraduationCap className="text-primary" size={28} />
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Bachelor of Engineering - Mechanical Engineering
                    </h3>
                    <p className="text-primary font-medium">Visvesvaraya Technological University (VTU)</p>
                    <p className="text-sm text-muted-foreground">2023 - 2027</p>
                    <p className="text-muted-foreground mt-2">
                      Currently pursuing my degree while actively developing my software 
                      development skills through personal projects and self-learning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Current Focus</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-foreground mb-2">Web Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building modern, responsive web applications using React, TypeScript, and modern frameworks.
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-foreground mb-2">AI Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Exploring machine learning and AI technologies to create intelligent applications.
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-foreground mb-2">Full-Stack Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Learning backend technologies to become a well-rounded full-stack developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
};

export default About;