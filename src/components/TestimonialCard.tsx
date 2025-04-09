
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

const TestimonialCard = ({ name, role, company, quote, image }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <Quote className="text-accent mb-4" size={32} />
      <p className="text-gray-700 italic mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-white font-bold relative overflow-hidden mr-4 border-2 border-primary/20">
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
  );
};

export default TestimonialCard;
