
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with premium gradient */}
      <section className="premium-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LevelUp Hub</h1>
            <p className="text-xl md:text-2xl font-light">
              Empowering professionals with cutting-edge knowledge to thrive in the evolving logistics industry.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At LevelUp Hub, our mission is to empower logistics and supply chain professionals with the skills they need to excel in an increasingly digital and automated industry. We believe that by making cutting-edge knowledge accessible through microlearning, we can help bridge the growing skills gap in the logistics sector.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We are committed to creating high-quality, industry-relevant content that enables professionals to implement new technologies and methodologies that drive efficiency, sustainability, and innovation in their organizations.
              </p>
            </div>
            <div className="premium-card p-8 md:p-10 animate-fade-up animate-delay-100">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                To bridge skill gaps in logistics through accessible, innovative education, creating a global community of tech-savvy logistics professionals driving industry transformation.
              </p>
              <div className="flex items-center mb-4">
                <Shield className="text-secondary mr-4 flex-shrink-0" size={28} />
                <p className="text-gray-700"><span className="font-semibold">Accessibility:</span> Making advanced education available to all professionals regardless of location or schedule</p>
              </div>
              <div className="flex items-center">
                <Shield className="text-secondary mr-4 flex-shrink-0" size={28} />
                <p className="text-gray-700"><span className="font-semibold">Innovation:</span> Constantly evolving our platform and courses to reflect the latest industry developments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 premium-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              These principles guide everything we do at LevelUp Hub.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="premium-card p-8 text-center hover:translate-y-[-10px] transition-all duration-300 animate-fade-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in all our courses, ensuring they meet the highest standards of quality and relevance.
              </p>
            </div>
            
            <div className="premium-card p-8 text-center hover:translate-y-[-10px] transition-all duration-300 animate-fade-up animate-delay-100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and teaching methodologies to provide cutting-edge learning experiences.
              </p>
            </div>
            
            <div className="premium-card p-8 text-center hover:translate-y-[-10px] transition-all duration-300 animate-fade-up animate-delay-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We design our platform to be accessible to professionals at all stages of their careers and from diverse backgrounds.
              </p>
            </div>
            
            <div className="premium-card p-8 text-center hover:translate-y-[-10px] transition-all duration-300 animate-fade-up animate-delay-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the tangible improvements our students make in their organizations and careers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our team combines decades of experience in logistics, supply chain management, and EdTech.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="premium-card p-8 text-center animate-fade-up shadow-premium hover:shadow-premium-hover">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 overflow-hidden border-4 border-accent/30">
                {/* Add team member image here if available */}
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-primary">SK</div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Siva Kesavan</h3>
              <p className="text-secondary font-medium mb-4 text-lg">Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed">
                Passionate about transforming logistics education through innovative technology and microlearning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with premium gradient */}
      <section className="py-20 premium-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-up">Ready to Join Our Learning Community?</h2>
          <p className="text-white text-xl mb-10 max-w-2xl mx-auto opacity-90 animate-fade-up animate-delay-100">
            Start your journey towards becoming a tech-savvy logistics professional today.
          </p>
          <Button asChild size="lg" className="premium-button bg-accent text-black hover:bg-accent/90 text-lg px-10 py-6 animate-fade-up animate-delay-200">
            <Link to="/courses">Explore Our Courses</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
