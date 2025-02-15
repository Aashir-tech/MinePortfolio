// Testimonials Component

import { Star } from "lucide-react";
import AzeemKhan from "../assets/AzeemKhan.jpg";
import AnkitPasi from "../assets/AnkitPasi.jpg";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Azeem Khan",
      role: "Full Stack Developer",
      text: "Aashir Haris is a standout full-stack developer and the top performer in our class. His expertise in frontend and backend, problem-solving skills, and leadership make him exceptional. Always eager for challenges, he excels in optimizing code, debugging, and team collaboration. His passion for learning and innovation makes him a valuable asset to any team.",
      image: AzeemKhan,
    },
    {
      name: "Ankit Pasi",
      role: "Data Analyst",
      text: "My friend Aashir Haris is a driven and talented individual with a bright future in the tech world. His passion for coding combined with his academic pursuits positions him as someone who is not only knowledgeable but also eager to make a meaningful impact in the field of computer applications.",
      image: AnkitPasi,
    },
  ];

  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p>{testimonial.text}</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
