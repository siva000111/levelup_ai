
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">LevelUp Hub</h3>
            <p className="text-gray-300 mb-4">Empowering professionals with cutting-edge knowledge to thrive in the evolving logistics industry.</p>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/benefits" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">AI in Logistics</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">IoT in Warehousing</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Blockchain Transparency</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">leveluphubinfo@gmail.com</p>
            <p className="text-gray-300 mb-4">+91 6369714934</p>
            <Link to="/contact" className="text-secondary hover:text-secondary/80 transition-colors">Get in Touch</Link>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} LevelUp Hub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
