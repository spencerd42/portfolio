import { useState, useEffect } from 'react';
import HomePage from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ExperiencePage from './components/Experience';
import About from './components/About';
import ProjectsPage from './components/Projects';

// --- Main App Component ---
// This component now acts as a router, deciding which page to display.
function App() {
  // 'page' state determines which component to render. It defaults to 'home'.
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // This function will render the correct page component based on the current state.
  const renderPage = () => {
    switch (page) {
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 font-sans flex flex-col">
      {page === 'home' && (
        <div>
          <div className="min-h-screen flex-grow flex flex-col">
            <Header setPage={setPage} />
            <HomePage />
          </div>
          <About />
          <Footer />
        </div>
      )}

      {page !== 'home' && (
        <div className="flex flex-col flex-grow min-h-screen">
          <Header setPage={setPage} />
          <div className="flex-grow">
            {renderPage()}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;