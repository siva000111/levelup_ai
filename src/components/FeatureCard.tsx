
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg">
      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-secondary" size={24} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
