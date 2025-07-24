import { Mail, Linkedin, Github, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import resume from '@/assets/LohitResume01.pdf';

const CallToAction = () => {
  const contactMethods = [
    {
      icon: <Mail className="text-primary" size={20} />,
      label: 'Email',
      value: 'lohitmahendrakar@gmail.com',
      link: 'mailto:lohitmahendrakar@gmail.com'
    },
    {
      icon: <Linkedin className="text-primary" size={20} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/lohit-mahendrakar'
    },
    {
      icon: <Github className="text-primary" size={20} />,
      label: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/LohitMahendrakar'
    }
  ];

  return (
    <section className="section-container">
      <div className="glass-card p-12 rounded-3xl text-center animate-scale-in hero-gradient">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Start a Conversation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for a dedicated developer, have an exciting project in mind, 
            or just want to connect, I'd love to hear from you. Let's create something amazing together.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="btn-professional inline-flex items-center gap-2 group text-lg px-8 py-4"
            >
              <MessageCircle size={20} />
              Get In Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href={resume}
              download
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2 text-lg"
            >
              Download Resume
            </a>
          </div>

          {/* Quick Contact Options */}
          <div className="border-t border-glass-border pt-8">
            <p className="text-muted-foreground mb-6">Or reach out directly via:</p>
            <div className="flex flex-wrap justify-center gap-6">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/70 transition-all duration-300 group"
                >
                  <div className="p-1 bg-primary/10 rounded group-hover:bg-primary/20 transition-colors">
                    {method.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">{method.label}</p>
                    <p className="text-sm font-medium text-foreground">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Response Promise */}
          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20 inline-block">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Quick response guaranteed:</span> I typically reply within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;