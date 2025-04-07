
interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

const TestimonialCard = ({ name, role, company, quote, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold mr-4">
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}, {company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
