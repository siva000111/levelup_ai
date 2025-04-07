
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const courses = [
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
      title: "Machine Learning for Demand Forecasting",
      description: "Master predictive analytics techniques to optimize inventory levels and improve supply chain efficiency.",
      price: 1299,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "AI & Machine Learning",
      duration: "5 Weeks",
      level: "Advanced"
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
      title: "Smart Sensors in Supply Chain",
      description: "Learn how to implement and manage IoT sensors for real-time monitoring of goods throughout the supply chain.",
      price: 999,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "IoT Technologies",
      duration: "3 Weeks",
      level: "Intermediate"
    },
    {
      title: "Blockchain for Supply Chain",
      description: "Master the fundamentals of blockchain technology and its applications in creating transparent, secure supply chains.",
      price: 2499,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Blockchain",
      duration: "8 Weeks",
      level: "Advanced"
    },
    {
      title: "Smart Contracts in Logistics",
      description: "Learn how to develop and implement smart contracts for automating logistics processes and payments.",
      price: 1899,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      category: "Blockchain",
      duration: "7 Weeks",
      level: "Advanced"
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning' },
    { id: 'IoT Technologies', name: 'IoT Technologies' },
    { id: 'Blockchain', name: 'Blockchain' }
  ];
  
  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl mb-8">
              Upskill with the latest technologies in logistics and supply chain management.
            </p>
            <Button 
              className="bg-accent text-black hover:bg-accent/90"
              onClick={() => setIsModalOpen(true)}
            >
              Get Free Demo Lesson
            </Button>
          </div>
        </div>
      </section>
      
      {/* Courses Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-secondary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-secondary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses List Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Courses Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <Button onClick={() => {setSearchTerm(''); setActiveCategory('all');}}>
                Show All Courses
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Pricing Tiers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">Certification Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the certification option that best fits your career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Basic Certification</h3>
                <div className="text-4xl font-bold mb-1">₹999</div>
                <p className="text-sm opacity-80">One-time payment</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Access to all course materials
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Basic certification upon completion
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lifetime access to course updates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Access to community forum
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">
                  Enroll Now
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-accent relative">
              <div className="absolute top-0 right-0 bg-accent text-black text-xs font-bold px-3 py-1 rounded-bl">
                RECOMMENDED
              </div>
              <div className="bg-primary p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Advanced Certification</h3>
                <div className="text-4xl font-bold mb-1">₹2,499</div>
                <p className="text-sm opacity-80">One-time payment</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Access to all course materials
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced industry-recognized certification
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lifetime access to course updates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Access to community forum
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    1:1 mentoring session (60 minutes)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Additional case studies & resources
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-accent text-black hover:bg-accent/90">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions about our courses? Find answers to common questions below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-primary mb-3">How long do I have access to a course?</h3>
              <p className="text-gray-700">
                Once enrolled, you have lifetime access to the course, including all future updates and improvements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Are there any prerequisites for the courses?</h3>
              <p className="text-gray-700">
                Most introductory courses don't require prior knowledge. Advanced courses may require basic understanding of the subject. Each course page lists any prerequisites.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-primary mb-3">How are the certifications recognized in the industry?</h3>
              <p className="text-gray-700">
                Our certifications are recognized by leading logistics and supply chain organizations. We regularly update our curriculum with input from industry leaders to ensure relevance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-primary mb-3">What is your refund policy?</h3>
              <p className="text-gray-700">
                We offer a 7-day money-back guarantee for all courses. If you're not satisfied with the content, you can request a full refund within 7 days of purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Not Sure Which Course to Choose?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Get a free demo lesson and consultation to help find the perfect course for your career goals.
          </p>
          <Button 
            className="bg-accent text-black hover:bg-accent/90"
            onClick={() => setIsModalOpen(true)}
          >
            Get Free Demo Lesson
          </Button>
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

export default Courses;
