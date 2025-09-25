import { ChevronDown } from 'lucide-react';

const HomePage = () => {
  const heroStyle = {
    backgroundImage: `url('/hero-bg.jpeg')`,
  };

  return (
    // Use a React Fragment to wrap both sections
    <>
      {/* --- Hero Section --- */}
      <section 
        className="relative flex-grow flex items-center justify-start text-left bg-cover bg-center px-6 md:px-12 lg:px-24"
        style={heroStyle}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm Spencer.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300">
            Software Engineer | AI/ML & FinTech
          </p>
        </div>
        
        {/* Animated Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown 
            size={48} 
            className="text-white animate-bounce" 
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;