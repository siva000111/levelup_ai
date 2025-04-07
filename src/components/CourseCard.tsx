
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 z-20 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>{duration}</span>
            <span>•</span>
            <span>{level}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">₹{price}</span>
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/courses">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
