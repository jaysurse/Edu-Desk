const HeroSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-[80vh] flex items-center justify-center text-center px-6 md:px-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
          Empowering Learning with <span className="text-blue-600 dark:text-blue-400">EduDesk</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Your all-in-one platform for sharing notes, resources, and collaboration — built with React and Tailwind CSS.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
