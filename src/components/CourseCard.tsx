
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Clock, BarChart2, Star, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  duration: string;
  level: string;
  rating?: number;
  students?: number;
  featured?: boolean;
}

const CourseCard = ({
  title,
  description,
  price,
  image,
  category,
  duration,
  level,
  rating = 4.8,
  students = 850,
  featured = false
}: CourseCardProps) => {
  return (
    <div className={cn(
      "premium-card overflow-hidden transition-all duration-300 hover:-translate-y-2 group",
      featured && "ring-2 ring-accent/30"
    )}>
      <div className="h-48 overflow-hidden relative">
        {/* Premium overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/80 z-10 opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-20 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
          {category}
        </div>
        
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-20 bg-white text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center">
            <Star className="w-3 h-3 mr-1 fill-accent text-accent" />
            Featured
          </div>
        )}
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{description}</p>
        
        {/* Rating & Students */}
        <div className="flex items-center justify-between mb-5 text-sm">
          <div className="flex items-center">
            <div className="flex mr-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(rating) ? "text-accent fill-accent" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-gray-700 font-medium">{rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Users size={14} />
            <span>{students.toLocaleString()} students</span>
          </div>
        </div>
        
        {/* Course details */}
        <div className="flex items-center justify-between mb-6 text-sm text-gray-500 border-t border-b border-gray-100 py-3">
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-secondary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart2 size={16} className="text-secondary" />
            <span>{level}</span>
          </div>
        </div>
        
        {/* Price & Enroll button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">₹{price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through ml-2">₹{Math.round(price * 1.2).toLocaleString()}</span>
          </div>
          <Button asChild className="premium-button bg-secondary hover:bg-secondary/90 shadow-premium-button hover:translate-y-[-2px] transition-all">
            <Link to="/courses">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
