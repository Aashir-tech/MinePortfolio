// Services Component
import {Code , Phone , MessageSquare} from 'lucide-react'

export const Services = () => (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Web Development",
              description: "Full-stack web applications with modern technologies",
              icon: <Code className="w-8 h-8 text-blue-500" />
            },
            {
              title: "Mobile Apps",
              description: "Cross-platform mobile applications",
              icon: <Phone className="w-8 h-8 text-blue-500" />
            },
            {
              title: "Consulting",
              description: "Technical consulting and architecture design",
              icon: <MessageSquare className="w-8 h-8 text-blue-500" />
            }
          ].map((service, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 hover:transform hover:scale-105 transition-all">
              {service.icon}
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );