
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About LevelUp Hub</h1>
            <p className="text-xl">
              Empowering professionals with cutting-edge knowledge to thrive in the evolving logistics industry.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg mb-6">
                At LevelUp Hub, our mission is to empower logistics and supply chain professionals with the skills they need to excel in an increasingly digital and automated industry. We believe that by making cutting-edge knowledge accessible through microlearning, we can help bridge the growing skills gap in the logistics sector.
              </p>
              <p className="text-gray-700 text-lg">
                We are committed to creating high-quality, industry-relevant content that enables professionals to implement new technologies and methodologies that drive efficiency, sustainability, and innovation in their organizations.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg mb-6">
                To bridge skill gaps in logistics through accessible, innovative education, creating a global community of tech-savvy logistics professionals driving industry transformation.
              </p>
              <div className="flex items-center mb-4">
                <Target className="text-secondary mr-3" size={24} />
                <p className="text-gray-700"><span className="font-semibold">Accessibility:</span> Making advanced education available to all professionals regardless of location or schedule</p>
              </div>
              <div className="flex items-center">
                <Target className="text-secondary mr-3" size={24} />
                <p className="text-gray-700"><span className="font-semibold">Innovation:</span> Constantly evolving our platform and courses to reflect the latest industry developments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at LevelUp Hub.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in all our courses, ensuring they meet the highest standards of quality and relevance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and teaching methodologies to provide cutting-edge learning experiences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                We design our platform to be accessible to professionals at all stages of their careers and from diverse backgrounds.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the tangible improvements our students make in their organizations and careers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team combines decades of experience in logistics, supply chain management, and EdTech.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                {/* Add team member image here if available */}
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-primary">RK</div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Ravi Kumar</h3>
              <p className="text-secondary font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600">
                Former Head of Logistics at TechSupply Ltd with 15+ years of industry experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                {/* Add team member image here if available */}
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-primary">SM</div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Sunita Mehta</h3>
              <p className="text-secondary font-medium mb-2">Chief Learning Officer</p>
              <p className="text-gray-600">
                PhD in Supply Chain Management with expertise in AI applications for logistics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                {/* Add team member image here if available */}
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-primary">AP</div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Amit Patel</h3>
              <p className="text-secondary font-medium mb-2">Director of Technology</p>
              <p className="text-gray-600">
                Former CTO of EdTech startup with experience building learning platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Learning Community?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Start your journey towards becoming a tech-savvy logistics professional today.
          </p>
          <Button asChild size="lg" className="bg-accent text-black hover:bg-accent/90">
            <Link to="/courses">Explore Our Courses</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
