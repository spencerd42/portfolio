// --- Header Component ---
// The header now takes a `setPage` function to change the currently viewed page.
const Header = ({ setPage }) => {
  // This function prevents the default link behavior and calls setPage instead.
  const handleNavClick = (e, page) => {
    e.preventDefault();
    setPage(page);
  };

  return (
    <header className={"sticky top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 text-neutral-200 shadow-lg transition-all duration-300"}>
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

export default Header;