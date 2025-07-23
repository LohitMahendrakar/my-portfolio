import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hi, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Lohit Mahindrakar
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                A passionate software developer with a focus on building smart, scalable, 
                and modern web solutions. Currently pursuing Mechanical Engineering while 
                exploring the intersection of technology and innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects" 
                className="btn-professional inline-flex items-center gap-2 group"
              >
                Explore My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-glass-border">
              <div>
                <p className="text-2xl font-bold text-foreground">3+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2024</p>
                <p className="text-sm text-muted-foreground">Started Coding</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">B.E.</p>
                <p className="text-sm text-muted-foreground">Engineering Student</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl glass-card overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-muted/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-primary">LM</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Professional photo coming soon</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;