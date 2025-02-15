// About Component
import AboutMeImage from "../assets/AboutMeImage.jpg";

export const About = () => (
  <section className="min-h-screen pt-20 px-4">
    <div className="max-w-4xl mx-auto h-1">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-lg">
            Hi, I'm Aashir Haris, a passionate Full Stack Developer specializing
            in the MERN stack. I have hands-on experience building modern,
            scalable web applications with React, Node.js, Express, and MongoDB.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or helping aspiring
            developers.
          </p>
        </div>
        <div
  className="bg-blue-500 rounded-lg h-80 md:h-auto bg-cover bg-center"
  style={{ backgroundImage: `url(${AboutMeImage})` }}
></div>
      </div>
    </div>
  </section>
);
