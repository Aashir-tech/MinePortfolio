import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "+918181962291"; // Your WhatsApp number
    const whatsappMessage = `Hello, My name is ${name}. My email is ${email}. Message: ${message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="min-h-50 pt-30 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <p>aashirharis6@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <p>+91 8181962291</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/Aashir-tech">
                <Github className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/aashir-haris">
                <Linkedin className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
              </a>
              <a href="mailto:aashirharis6@gmail.com">
                <Mail className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
              </a>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSendMessage}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
