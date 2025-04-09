
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
}

const FeatureCard = ({ title, description, icon: Icon, highlight = false }: FeatureCardProps) => {
  return (
    <div className={cn(
      "premium-card p-8 border border-gray-100 transition-all hover:shadow-premium-hover group relative overflow-hidden",
      highlight && "border-l-4 border-l-secondary"
    )}>
      <div className="w-14 h-14 bg-gradient-premium-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
        <Icon className="text-secondary" size={28} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      {/* Premium decorative element */}
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-secondary/5 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
    </div>
  );
};

export default FeatureCard;
