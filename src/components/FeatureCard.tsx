
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="premium-card p-8 border border-gray-100 transition-all hover:shadow-premium-hover group">
      <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors duration-300">
        <Icon className="text-secondary" size={28} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
