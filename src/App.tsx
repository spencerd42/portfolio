import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';

// --- Page Components ---
// We've broken out each section into its own component to act as a "page".

// const HomePage = () => {
//   const heroStyle = {
//     backgroundImage: `url('https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=2070&auto=format&fit=crop')`,
//   };

//   return (
//     <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={heroStyle}>
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
//       <div className="relative z-10 px-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           Hi, I'm Spencer.
//         </h1>
//         <p className="text-lg md:text-xl text-neutral-300">
//           Software Engineer | AI/ML & FinTech
//         </p>
//       </div>
//     </section>
//   );
// };

import { ChevronDown } from 'lucide-react';

const HomePage = () => {
  const heroStyle = {
    // Using a slightly different, high-quality image for variety
    backgroundImage: `url('/hero-bg.jpeg')`,
  };

  return (
    // Use a React Fragment to wrap both sections
    <>
      {/* --- Hero Section --- */}
      <section 
        className="relative h-screen flex items-center justify-start text-left bg-cover bg-center px-6 md:px-12 lg:px-24"
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

      {/* --- About Me Section --- */}
      <section id="about" className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* About Text */}
            <div className="text-lg text-neutral-300 space-y-4 text-center md:text-left">
              <p>
                I'm a passionate software engineer with a strong focus on building intelligent systems 
                at the intersection of artificial intelligence and financial technology. My journey into tech 
                is built on a unique foundation of resilience and teamwork, skills I first honed while working 
                as a commercial fisherman in the challenging conditions of Alaska.
              </p>
              <p>
                Today, I apply that same dedication to solving complex problems with code. Whether it's 
                developing robust AI/ML pipelines or engineering solutions for trading systems, I thrive on 
                creating software that is both efficient and impactful.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

const ProjectsPage = () => {
  return (
    <section id="projects" className="my-16 text-neutral-200">
       <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
       <div className="text-center p-8 bg-neutral-800 rounded-lg border border-neutral-700">
        <p>A showcase of my projects, including the live trading bot graph, will be here.</p>
      </div>
    </section>
  );
};

// const ContactPage = () => {
//   return (
//     <section id="contact" className="my-16 text-neutral-200">
//         <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
//         <div className="text-center p-8 bg-neutral-800 rounded-lg border border-neutral-700">
//         <p>Contact information and a form will be available here.</p>
//       </div>
//     </section>
//   );
// };

// --- Experience Page ---
// Step 1: Import the icons from lucide-react
import { DollarSign, BrainCircuit, Network, Fish } from 'lucide-react';

// --- TYPE DEFINITION ---
// Defines the shape of a single timeline event object.
type TimelineEvent = {
  date: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
};
const timelineEvents: TimelineEvent[] = [
  { date: 'June 2023 - July 2023', title: 'Camp Ekuk', subtitle: "Commercial Fisherman", description: 'My first job was working for my aunt as a commercial salmon fisherman in Ekuk, Alaska. While completely irrelevant to my software engineering ability, this experience is arguably the most valuable of any on this list. For one month, I had no off-hours or weekends, no internet or even my own room to escape to. It was there that I learned to work with a team. Not a few people on a zoom meeting, but a crew that was pushed to their physical and mental limits every day. There was no going home or logging off at the end of the day. Even if days were filled with broken equipment, arguing, and yelling and one another, we all sat down for dinner together at the end of the day and prepared to do it all again tomorrow. There was no other option.', icon: <Fish size={16} className="text-white" /> },
  { 
    date: 'May 2024 - August 2024', 
    title: 'Intellect Logic Systems', 
    subtitle: "Embedded Software Engineer", 
    // MODIFIED DESCRIPTION: Now using JSX with a link
    description: (
      <>
        I independently developed a software simulation of the newly patented network processor. 
        At the conclusion of my summer internship, I culminated my knowledge into a technical 
        example chapter in{' '}
        <a 
          href="https://www.amazon.com/Network-Programming-Theory-Roscoe-Ferguson/dp/1965261027"
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          Network Logic Programming Theory
        </a>
        {' '}by Roscoe Ferguson.
      </>
    ), 
    icon: <Network size={16} className="text-white" /> 
  },
  { date: 'January 2025 - May 2025', title: 'Intellect Logic Systems', subtitle: "AI/ML Engineer", description: 'In Spring of 2025, I worked part-time for ILS on a RAG pipeline. I was focused on adding support for ingesting a new type of document, including cleaning, chunking, and embedding the data. In addition, I assisted with transitioning are code base from being hosted on AWS to our own private server.', icon: <BrainCircuit size={16} className="text-white" /> },
  { date: 'May 2025 - August 2025', title: 'Harris Preston & Partners', subtitle: "AI/ML Engineer", description: 'At Harris Preston and Partners, I dove into the world of private equity. I consolidated and analyzed more than 75 deals to provide data-driven investment recommendations. In addition, I automated the drafting of investment notices and built a framework for comparing documents via semantic search. Finally, I was able to observe first-hand private equity deal flow, due diligence, and value creation.', icon: <DollarSign size={16} className="text-white" /> },
];

// --- TIMELINE ITEM COMPONENT ---
// Renders a single event on the timeline.
const TimelineItem: React.FC<{ event: TimelineEvent; isLast: boolean }> = ({ event, isLast }) => (
    <div className="relative pl-12 pb-12 group">
        {/* The vertical line connecting the dots */}
        {!isLast && (
            <div className="absolute left-4 top-5 h-full w-0.5 bg-gray-300 dark:bg-neutral-700"></div>
        )}

        {/* The timeline point/dot */}
        <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 bg-gray-300 dark:bg-neutral-700 rounded-full group-hover:bg-indigo-600 transition-colors duration-300">
            <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center ring-4 ring-gray-100 dark:ring-neutral-900 group-hover:ring-indigo-200 dark:group-hover:ring-indigo-800 transition-all duration-300">
                {event.icon || <div className="w-2 h-2 bg-white rounded-full"></div>}
            </div>
        </div>

        {/* The timeline event content */}
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-transparent dark:border-neutral-700">
            <time className="block mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{event.date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
            {/* Step 3: Render the subtitle if it exists. */}
            {event.subtitle && (
                 <p className="text-md font-medium text-indigo-500 dark:text-indigo-400 mb-2">{event.subtitle}</p>
            )}
            <p className="text-base font-normal text-gray-600 dark:text-gray-300">{event.description}</p>
        </div>
    </div>
);


// --- NEW EXPERIENCE PAGE COMPONENT ---
const ExperiencePage = () => {
  // Create a reversed copy of the events for rendering, so the original array is not mutated.
  const reversedEvents = [...timelineEvents].reverse();

  return (
    <section id="experience" className="my-20 text-neutral-200">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          A timeline of my professional journey.
        </p>
      </header>
      <main className="relative max-w-3xl mx-auto">
        {/* Map over the reversed array to show newest first. */}
        {reversedEvents.map((event, index) => (
          <TimelineItem key={index} event={event} isLast={index === reversedEvents.length - 1} />
        ))}
      </main>
    </section>
  );
};


// --- Header Component ---
// The header now takes a `setPage` function to change the currently viewed page.
const Header = ({ isScrolled, setPage }) => {
  // This function prevents the default link behavior and calls setPage instead.
  const handleNavClick = (e, page) => {
    e.preventDefault();
    setPage(page);
  };

  return (
    <header className={"fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 text-neutral-200 shadow-lg transition-all duration-300"}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          {/* Clicking the name now navigates to the 'home' page */}
          <a href="/" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-neutral-400 transition-colors duration-300">
            Spencer Dwyer
          </a>
        </div>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            {/* Each link now calls handleNavClick to change the page state */}
            {/* <li>
              <a href="/about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-neutral-400 transition-colors duration-300">
                About
              </a>
            </li> */}
            <li>
              <a href="/experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-neutral-400 transition-colors duration-300">
                Experience
              </a>
            </li>
            <li>
              <a href="/projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-neutral-400 transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="/music" onClick={(e) => handleNavClick(e, 'music')} className="hover:text-neutral-400 transition-colors duration-300">
                Music
              </a>
            </li>
            {/* <li>
              <a href="/contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-neutral-400 transition-colors duration-300">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};


// --- Main App Component ---
// This component now acts as a router, deciding which page to display.
function App() {
  // 'page' state determines which component to render. It defaults to 'home'.
  const [page, setPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The scroll effect for the header is only active on the home page.
      if (page === 'home') {
        setIsScrolled(window.scrollY > 10);
      } else {
        // On other pages, the header is always in its "scrolled" state.
        setIsScrolled(true);
      }
    };
    
    // We call handleScroll once initially to set the correct header state on page load.
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]); // This effect re-runs whenever the 'page' state changes.


  // This function will render the correct page component based on the current state.
  const renderPage = () => {
    switch (page) {
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      // The 'home' case is handled separately below to allow for the hero layout.
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 font-sans flex flex-col">
      <Header isScrolled={isScrolled || page !== 'home'} setPage={setPage} />
      
      {/* The main content now grows to fill available space */}
      <div className="flex-grow">
        {/* We only show the full-screen Hero on the home page */}
        {page === 'home' && <HomePage />}

        {/* The main content area now ONLY renders if we are NOT on the home page */}
        {page !== 'home' && (
          <main className="container mx-auto p-4 md:p-8">
            {renderPage()}
          </main>
        )}
      </div>
      
      <Footer /> {/* 👈 2. Add the Footer component here */}
    </div>
  );
}

export default App;
