const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          About Edu Desk
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Edu Desk
          </span>{" "}
          is a collaborative academic platform designed for diploma and degree
          students. It enables users to{" "}
          <span className="font-medium">share class notes</span>,{" "}
          <span className="font-medium">upload assignments</span>, and{" "}
          <span className="font-medium">track deadlines</span> all in one place.
          Whether you're a student trying to keep up with syllabus or a faculty
          member managing submissions, Edu Desk makes learning easier, smarter,
          and more organized.
        </p>
      </div>
    </section>
  );
};

export default About;
