// Experience Component
export const Experience = () => (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {[
            {
              role: "Senior Developer",
              company: "Tech Corp",
              period: "2022 - Present",
              description: "Leading development of enterprise applications"
            },
            {
              role: "Full Stack Developer",
              company: "StartUp Inc",
              period: "2020 - 2022",
              description: "Built and maintained multiple client applications"
            }
          ].map((job, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 hover:transform hover:scale-102 transition-all">
              <h3 className="text-xl font-bold">{job.role}</h3>
              <p className="text-blue-500">{job.company}</p>
              <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
              <p className="mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );