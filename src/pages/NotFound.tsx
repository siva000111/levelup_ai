
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md px-4">
        <div className="mb-6 text-accent">
          <div className="inline-block bg-secondary/10 p-4 rounded-full">
            <span className="text-7xl font-bold text-primary">404</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-secondary hover:bg-secondary/90">
          <Link to="/" className="flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Return to Home Page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
