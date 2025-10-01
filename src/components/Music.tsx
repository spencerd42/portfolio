// src/pages/MusicPage.tsx

import WistiaPlayer from '../components/WistiaPlayer'; // Adjust the import path as needed

// A list of all your Wistia video IDs
const myProjectIds = ['3djkwkb83f', 'j38ihs9jkc', 'g1p2u3q4r5']; // Example IDs

const MusicPage = () => {
  return (
    <section id="music" className="pb-20 text-neutral-200">
      <header className="text-center mb-12 mt-16">
        <h2 className="text-4xl font-bold text-center mb-4">Music</h2>
        <p>Selections from my most recent performances.</p>
      </header>
      <main className="px-8 mx-auto max-w-4xl space-y-12">
        <h2 className="text-2xl font-bold text-center mb-4">Pictures at an Exhibition - The Great Gate of Kiev</h2>
        <WistiaPlayer mediaId={"3h3uduurus"} />
        <p>February 10, 2025 - The University of Texas at Austin Wind Symphony</p>
        <h2 className="text-2xl font-bold text-center mb-4">Lincolshire Posy: II. Horkstow Grange</h2>
        <WistiaPlayer mediaId={"1aoc6ukuoj"} />
        <p>September 26, 2025 - The University of Texas at Austin Wind Symphony</p>
      </main>
    </section>
  );
};

export default MusicPage;