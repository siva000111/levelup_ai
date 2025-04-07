
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  BookOpen, 
  Award, 
  Users, 
  CheckCircle, 
  MessageSquare, 
  Calendar,
  Star
} from 'lucide-react';

const Benefits = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Why Choose Us</h1>
            <p className="text-xl">
              Discover the LevelUp Hub advantage and how our courses can transform your career.
            </p>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">Key Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's why professionals choose LevelUp Hub for their upskilling needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Flexible Learning</h3>
              <p className="text-gray-700">
                Learn at your own pace with bite-sized modules designed for busy professionals. Courses are available 24/7 on any device.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Industry Certifications</h3>
              <p className="text-gray-700">
                Earn recognized certifications that demonstrate your expertise and boost your employability in the logistics sector.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Lifelong Access</h3>
              <p className="text-gray-700">
                Once enrolled, access your course materials forever, including all future updates and improvements to the curriculum.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Community Support</h3>
              <p className="text-gray-700">
                Join a community of like-minded professionals to network, collaborate, and share knowledge and opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Practical Skills</h3>
              <p className="text-gray-700">
                Courses focus on real-world applications, providing skills you can implement immediately in your workplace.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Expert Instructors</h3>
              <p className="text-gray-700">
                Learn from industry veterans with extensive experience implementing the technologies and methodologies they teach.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Free Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Free Resources</h2>
              <p className="text-gray-700 text-lg mb-6">
                All students get access to our extensive library of free resources to supplement their learning and support their career development.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 bg-secondary/10 rounded-full p-1 mr-3">
                    <CheckCircle className="text-secondary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Career Guides</h4>
                    <p className="text-gray-600">Comprehensive guides on various career paths in logistics and supply chain management.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 bg-secondary/10 rounded-full p-1 mr-3">
                    <CheckCircle className="text-secondary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Templates & Tools</h4>
                    <p className="text-gray-600">Ready-to-use templates for logistics planning, project management, and reporting.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mt-1 bg-secondary/10 rounded-full p-1 mr-3">
                    <CheckCircle className="text-secondary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Industry Reports</h4>
                    <p className="text-gray-600">Quarterly reports on logistics trends, technology advancements, and market analysis.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Featured Free Resources</h3>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mr-3">
                      <BookOpen className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Logistics Career Pathway Guide</h4>
                      <p className="text-sm text-gray-600">30-page PDF with career progression maps</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mr-3">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Logistics Technology Roadmap</h4>
                      <p className="text-sm text-gray-600">Strategic planning template for tech implementation</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mr-3">
                      <MessageSquare className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">AI in Logistics Glossary</h4>
                      <p className="text-sm text-gray-600">Comprehensive dictionary of key terms and concepts</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild className="bg-secondary hover:bg-secondary/90">
                  <Link to="/courses">Explore Courses to Access</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our courses have helped professionals achieve their career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 relative">
              <div className="absolute top-6 right-6 text-5xl text-gray-100 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">
                  After completing the AI in Logistics course, I led a project that implemented predictive analytics for our delivery routes. This resulted in a 15% reduction in fuel costs and significantly improved on-time deliveries.
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                    MS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Manish Singh</h4>
                    <p className="text-gray-600 text-sm">Operations Manager, FastDelivery Ltd</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 relative">
              <div className="absolute top-6 right-6 text-5xl text-gray-100 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6">
                  The blockchain course gave me the expertise to implement transparent tracking systems in our global supply chain. Our customers now have complete visibility, and we've seen a significant increase in trust and satisfaction.
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                    SA
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Seema Agarwal</h4>
                    <p className="text-gray-600 text-sm">Supply Chain Director, Global Traders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ROI Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">Return on Investment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how the investment in our courses pays off in your career and organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-secondary mb-4">20%</div>
              <h3 className="text-xl font-bold text-primary mb-2">Average Salary Increase</h3>
              <p className="text-gray-700">
                Reported by our students within 6 months of completing certification.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-secondary mb-4">89%</div>
              <h3 className="text-xl font-bold text-primary mb-2">Career Advancement</h3>
              <p className="text-gray-700">
                Percentage of students who reported positive career development.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
              <div className="text-5xl font-bold text-secondary mb-4">15%</div>
              <h3 className="text-xl font-bold text-primary mb-2">Operational Improvements</h3>
              <p className="text-gray-700">
                Average operational efficiency gain reported by organizations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already boosted their careers with our courses.
          </p>
          <Button asChild size="lg" className="bg-accent text-black hover:bg-accent/90">
            <Link to="/courses">Explore Courses Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Benefits;
