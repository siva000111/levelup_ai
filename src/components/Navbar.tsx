
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for premium feel
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
        : "bg-white shadow-sm py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary text-2xl font-bold">LevelUp Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/courses', label: 'Courses' },
              { path: '/benefits', label: 'Why Choose Us' },
              { path: '/contact', label: 'Contact Us' },
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                onClick={() => window.scrollTo(0, 0)} 
                className={cn(
                  "text-gray-700 hover:text-secondary font-medium relative py-2",
                  isActive(item.path) && "text-secondary",
                  "after:content-[''] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:bg-secondary after:transition-all after:duration-300",
                  isActive(item.path) ? "after:w-full" : "hover:after:w-full"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link to="/courses">
            <Button 
              onClick={() => window.scrollTo(0, 0)} 
              className="bg-secondary hover:bg-secondary/90 shadow-premium-button hover:translate-y-[-2px] transition-all"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/courses', label: 'Courses' },
              { path: '/benefits', label: 'Why Choose Us' },
              { path: '/contact', label: 'Contact Us' },
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={cn(
                  "text-gray-700 hover:text-secondary py-2 border-b border-gray-100",
                  isActive(item.path) && "text-secondary"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/courses">
              <Button 
                className="bg-gradient-premium text-white hover:opacity-90 w-full mt-2"
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
