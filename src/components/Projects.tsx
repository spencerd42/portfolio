import React from 'react';

// 1. Define your projects data here
const projects = [
  {
    title: "Dairy Cow Milk Yield Prediction",
    description: "Predictive analysis of milk yield from dairy cows. My group's submission for our CS 363M final project. Earned 4th place out of 52 teams.",
    tags: ["Python", "Jupyter", "Pandas", "Scikit-Learn", "Boosting"],
    link: "/ml_final_proj.html", // Ensure this file is in your 'public' folder
    color: "bg-cyan-400" // Decorative accent color
  },
  {
    title: "Wunder Fund RNN Challenge",
    description: "Market state prediction based on time series data. My final model was a Temporal Fusion Transformer trained via PyTorch and placed 93rd on the final leaderboard. There were over 2,000 participants with about 700 making a valid submission.",
    tags: ["Python", "PyTorch", "LSTM", "TFT"],
    link: "https://github.com/spencerd42/wunder_2",
    color: "bg-red-400" 
  },
  // Add more projects here...
];

const ProjectsPage = () => {
  return (
    <section id="projects" className="pb-20 pt-16 text-neutral-200">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-neutral-400 max-w-xl mx-auto">
          A collection of my technical work in machine learning.
        </p>
      </header>
      
      <main className="px-8 mx-auto max-w-6xl">
        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Decorative Top Bar (Optional: replaces an image if you don't have one) */}
              <div className={`h-2 w-full ${project.color}`} />

              <div className="p-6 flex flex-col flex-grow">
                {/* Title & Icon Arrow */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-neutral-500 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <p className="text-neutral-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
            <a
                href="https://github.com/spencerd42"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-indigo-400 transition-colors text-sm font-semibold"
            >
                View more on GitHub &rarr;
            </a>
        </div>
      </main>
    </section>
  );
};

export default ProjectsPage;