const ProjectsPage = () => {
  return (
    <section id="experience" className="pb-20 text-neutral-200">
      <header className="text-center mb-16 mt-16">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
      </header>
      <main className="px-8 mx-auto max-w-3xl">
        <div className="text-center p-8 bg-neutral-800 rounded-lg border border-neutral-700">
            <p>Live demos coming soon! For now, <a
                    href="https://github.com/spencerd42"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
                        check out my GitHub
                </a>
            .</p>
        </div>
      </main>
    </section>
  );
};

export default ProjectsPage;