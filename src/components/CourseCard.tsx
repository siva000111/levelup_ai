
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Clock, BarChart2 } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  duration: string;
  level: string;
}

const CourseCard = ({
  title,
  description,
  price,
  image,
  category,
  duration,
  level
}: CourseCardProps) => {
  return (
    <div className="premium-card overflow-hidden transition-all duration-300 hover:-translate-y-2 group">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/80 z-10 group-hover:opacity-90 transition-opacity duration-300"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 z-20 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
          {category}
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 mb-5 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between mb-5 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart2 size={16} />
            <span>{level}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">₹{price}</span>
          <Button asChild className="premium-button bg-secondary hover:bg-secondary/90">
            <Link to="/courses">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
