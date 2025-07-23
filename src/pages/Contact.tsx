import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: 'Email',
      value: 'lohitmahendrakar@gmail.com',
      link: 'mailto:lohitmahendrakar@gmail.com'
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      label: 'Phone',
      value: '+91 9164417470',
      link: 'tel:+919164417470'
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/lohit-mahendrakar',
      link: 'https://linkedin.com/in/lohit-mahendrakar'
    },
    {
      icon: <Github className="text-primary" size={24} />,
      label: 'GitHub',
      value: 'github.com/LohitMahendrakar',
      link: 'https://github.com/LohitMahendrakar'
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
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
          </div>
        </section>

        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl animate-slide-up">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send me a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-professional inline-flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Availability */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Contact Information */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium text-foreground">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <MapPin className="text-primary" size={24} />
                  Current Status
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-semibold text-green-800">Available for opportunities</span>
                    </div>
                    <p className="text-sm text-green-700">
                      I'm currently seeking internship and job opportunities in software development.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">What I'm looking for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Software development internships</li>
                      <li>• Web development projects</li>
                      <li>• AI/ML collaboration opportunities</li>
                      <li>• Open source contributions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6 rounded-2xl text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  I typically respond within <span className="text-primary font-semibold">24 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="section-container">
          <div className="glass-card p-8 rounded-2xl text-center animate-scale-in">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Services & Collaboration
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              I'm passionate about building intuitive and scalable web applications with a strong focus 
              on performance and modern design. I'd love to collaborate on exciting tech projects!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold text-foreground mb-2">Web Development</h3>
                <p className="text-sm text-muted-foreground">
                  Modern, responsive websites and web applications using React, TypeScript, and cutting-edge technologies.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold text-foreground mb-2">AI Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Implementing AI solutions and machine learning models to solve complex business problems.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold text-foreground mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Technical consultation and code reviews to help improve your existing projects and workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;