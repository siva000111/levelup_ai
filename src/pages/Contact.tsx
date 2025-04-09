
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: 'course-inquiry',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            query_type: formData.queryType,
            message: formData.message
          }
        ]);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        queryType: 'course-inquiry',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">
              Have questions? We're here to help. Reach out to our team for any inquiries.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="queryType" className="block text-sm font-medium text-gray-700 mb-1">
                    Query Type
                  </label>
                  <select
                    id="queryType"
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  >
                    <option value="course-inquiry">Course Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-secondary/10 rounded-full p-3 mr-4">
                        <Mail className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                        <p className="text-gray-600">leveluphubinfo@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary/10 rounded-full p-3 mr-4">
                        <Phone className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Call Us</h3>
                        <p className="text-gray-600">+91 6369714934</p>
                        <p className="text-gray-600">Monday - Friday, 9AM - 6PM IST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary/10 rounded-full p-3 mr-4">
                        <MapPin className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Virtual Office</h3>
                        <p className="text-gray-600">
                          LevelUp Hub<br />
                          Tech Park, Sector 62<br />
                          Noida, Uttar Pradesh, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary/10 rounded-full p-3 mr-4">
                        <Linkedin className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Connect with Founder</h3>
                        <a 
                          href="https://www.linkedin.com/in/siva-kesavan/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary/80 font-medium transition-colors"
                        >
                          Siva Kesavan - LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">How soon can I start a course after enrollment?</h4>
                    <p className="text-gray-600">
                      You can start immediately after completing the enrollment process and payment.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Do you offer corporate training packages?</h4>
                    <p className="text-gray-600">
                      Yes, we offer customized training solutions for organizations. Please contact us for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support Times Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">Support Hours</h2>
          <p className="text-gray-700 mb-4">
            Our support team is available to assist you during the following hours:
          </p>
          <p className="text-gray-700 font-medium">
            Monday - Friday: 9:00 AM - 6:00 PM (IST)
          </p>
          <p className="text-gray-700 mt-4">
            For urgent inquiries outside business hours, please email us at <span className="text-secondary">urgent@leveluphub.com</span>
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
