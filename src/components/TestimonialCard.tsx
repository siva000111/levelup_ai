
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  rating?: number;
}

const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  quote, 
  image,
  rating = 5
}: TestimonialCardProps) => {
  return (
    <div className="premium-card p-8 relative overflow-hidden group hover:border-secondary/30 transition-all">
      {/* Background decoration */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-secondary/5 rounded-full transition-transform duration-500 group-hover:scale-125"></div>
      
      {/* Quote icon */}
      <div className="relative">
        <Quote className="text-accent mb-4" size={32} />
        
        {/* Rating stars */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-accent fill-accent" : "text-gray-300"}
            />
          ))}
        </div>
        
        <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">"{quote}"</p>
        
        <div className="flex items-center mt-auto relative z-10">
          <div className="w-14 h-14 rounded-full bg-gradient-premium flex items-center justify-center text-white font-bold relative overflow-hidden mr-4 border-2 border-white shadow-md">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              name.charAt(0)
            )}
          </div>
          <div>
            <h4 className="font-bold text-primary">{name}</h4>
            <p className="text-secondary text-sm">{role}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
