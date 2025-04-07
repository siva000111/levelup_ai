
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetStarted = () => {
    // Scroll to top first
    window.scrollTo(0, 0);
    // You might want to redirect to a specific page or open a modal
    // For now, we'll just redirect to the courses page
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary text-2xl font-bold">LevelUp Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-700 hover:text-secondary font-medium">Home</Link>
          <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-700 hover:text-secondary font-medium">About Us</Link>
          <Link to="/courses" onClick={() => window.scrollTo(0, 0)} className="text-gray-700 hover:text-secondary font-medium">Courses</Link>
          <Link to="/benefits" onClick={() => window.scrollTo(0, 0)} className="text-gray-700 hover:text-secondary font-medium">Why Choose Us</Link>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-gray-700 hover:text-secondary font-medium">Contact Us</Link>
          <Link to="/courses">
            <Button onClick={() => window.scrollTo(0, 0)} className="bg-secondary hover:bg-secondary/90">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-secondary py-2"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-secondary py-2"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              About Us
            </Link>
            <Link 
              to="/courses" 
              className="text-gray-700 hover:text-secondary py-2"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Courses
            </Link>
            <Link 
              to="/benefits" 
              className="text-gray-700 hover:text-secondary py-2"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Why Choose Us
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-secondary py-2"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Contact Us
            </Link>
            <Link to="/courses">
              <Button 
                className="bg-secondary hover:bg-secondary/90 w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
