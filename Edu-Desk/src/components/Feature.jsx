const features = [
  {
    title: "Share Notes",
    icon: "📝",
    description: "Easily share class notes with friends and batchmates.",
  },
  {
    title: "Upload Assignments",
    icon: "📤",
    description: "Upload your assignments securely for faculty review.",
  },
  {
    title: "Faculty Access",
    icon: "👨‍🏫",
    description: "Allow professors to access and review submitted notes.",
  },
  {
    title: "Track Deadlines",
    icon: "📅",
    description: "Never miss a due date with reminders and calendar sync.",
  },
  {
    title: "Smart Search",
    icon: "🔍",
    description: "Find notes quickly by title, subject, or uploader name.",
  },
  {
    title: "Dark Mode",
    icon: "🌙",
    description: "Switch between light and dark themes effortlessly.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
