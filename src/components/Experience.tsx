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
  const reversedEvents = [...timelineEvents].reverse();

  return (
    <section id="experience" className="pb-20 text-neutral-200">
      <header className="text-center mb-16 mt-16">
        <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          A timeline of my professional journey.
        </p>
      </header>
      <main className="px-8 mx-auto max-w-3xl">
        {/* Map over the reversed array to show newest first. */}
        {reversedEvents.map((event, index) => (
          <TimelineItem key={index} event={event} isLast={index === reversedEvents.length - 1} />
        ))}
      </main>
    </section>
  );
};

export default ExperiencePage;