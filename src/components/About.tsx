const About = () => {
  return (
    <>
    {/* --- About Me Section --- */}
      <section id="about" className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* About Text */}
            <div className="text-lg text-neutral-300 space-y-4 text-left">
              <p>
                I am a dedicated and analytical student at The University of Texas at Austin,
                pursuing a double-major in Computer Science and Music. My experience is primarily
                in artificial intelligence and machine learning, including large-language models and
                predictive analysis, and I am fascinated by the applications of technology within
                financial markets and trading.
              </p>
              <p>
                I study oboe with Dr. Andrew Parker, participating in masterclasses, large ensembles,
                and solo performances. I strive to become the best version of myself by growing
                both my analytical and artistic skills. While music can offer my brain a break
                from computer science, the two fields often overlap in prioritizing accuracy and
                efficiency.
              </p>
            </div>

          </div>
        </div>
      </section>
      </>
  );
};

export default About;