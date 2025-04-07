
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, BookOpen, ArrowRight, Star, CheckCircle, BookCheck, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import CourseCard from '@/components/CourseCard';
import FeatureCard from '@/components/FeatureCard';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredCourses = [
    {
      title: "AI in Logistics Management",
      description: "Learn to implement AI solutions to optimize logistics operations, inventory management, and supply chain visibility.",
      price: 999,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "AI & Machine Learning",
      duration: "4 Weeks",
      level: "Intermediate"
    },
    {
      title: "IoT in Warehousing",
      description: "Discover how IoT technologies are revolutionizing warehouse operations, tracking, and management systems.",
      price: 1499,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "IoT Technologies",
      duration: "6 Weeks",
      level: "Advanced"
    },
    {
      title: "Blockchain for Supply Chain",
      description: "Master the fundamentals of blockchain technology and its applications in creating transparent, secure supply chains.",
      price: 2499,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Blockchain",
      duration: "8 Weeks",
      level: "Advanced"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Logistics Manager",
      company: "Global Express",
      quote: "The AI in Logistics course helped me implement new solutions that reduced our operational costs by 23%. Highly recommended for professionals looking to stay ahead!"
    },
    {
      name: "Rajesh Kumar",
      role: "Supply Chain Analyst",
      company: "TechLogistics Inc.",
      quote: "Comprehensive curriculum with perfect balance of theory and practical examples. The certification has been valuable in advancing my career."
    },
    {
      name: "Ananya Patel",
      role: "Warehouse Supervisor",
      company: "QuickShip",
      quote: "After completing the IoT in Warehousing course, I was able to lead a facility modernization project that improved efficiency by 35%."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Upskill in Logistics & SCM with AI-Powered Microlearning
            </h1>
            <p className="text-xl mb-8">
              Learn AI, IoT, Blockchain & more. Get certified. Boost your career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-black hover:bg-accent/90">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Get Free Demo Lesson
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">Why Choose LevelUp Hub</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our AI-powered microlearning platform is designed to fit your busy schedule while maximizing knowledge retention.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Clock}
              title="Bite-sized Learning"
              description="Compact, focused lessons designed for busy professionals. Complete modules in as little as 15 minutes per day."
            />
            <FeatureCard
              icon={Award}
              title="Industry Certifications"
              description="Earn recognized certifications that boost your resume and demonstrate your expertise in cutting-edge logistics technologies."
            />
            <FeatureCard
              icon={BookOpen}
              title="Lifelong Access"
              description="Once enrolled, access your course materials forever, including all future updates and improvements."
            />
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-3">Featured Courses</h2>
              <p className="text-gray-600">Upskill with our most popular logistics and SCM technology courses.</p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
              <Link to="/courses" className="flex items-center">
                View All Courses <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Button asChild variant="outline">
              <Link to="/courses" className="flex items-center justify-center">
                View All Courses <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Benefits of Our Platform</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">When you enroll in our courses, you get more than just education.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="text-accent mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2">Flexible Learning Schedule</h3>
                <p className="text-gray-300">Learn at your own pace, anytime, anywhere. Our platform is accessible 24/7 from any device.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Star className="text-accent mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2">Industry-Relevant Skills</h3>
                <p className="text-gray-300">Curriculum designed with input from industry leaders to ensure you learn what employers need.</p>
              </div>
            </div>
            <div className="flex items-start">
              <BookCheck className="text-accent mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2">Free Resources</h3>
                <p className="text-gray-300">Access career guides, templates, and tools to help you apply your knowledge in real-world settings.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CalendarClock className="text-accent mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2">Regular Updates</h3>
                <p className="text-gray-300">Course content is continuously updated to reflect the latest industry trends and technologies.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-accent text-black hover:bg-accent/90">
              <Link to="/benefits">Learn More About Benefits</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from professionals who have transformed their careers with our courses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've advanced their logistics careers with LevelUp Hub.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-black hover:bg-accent/90">
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-secondary"
              onClick={() => setIsModalOpen(true)}
            >
              Get Free Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
