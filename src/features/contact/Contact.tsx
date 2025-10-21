import { Link } from "@/components/internal/Link";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    // You can integrate with your preferred form service here
    alert("Message sent successfully!");
  };

  return (
    <div className="font-mono flex flex-col items-start gap-6">
      <div className="text-base md:text-lg">
        Reach me at&nbsp;
        <BoxReveal boxColor="#c27aff">
          <Link color="purple" link="mailto:sujalbhugul08@gmail.com">
            <span className="font-bold">sujalbhugul08@gmail.com</span>
          </Link>
        </BoxReveal>
      </div>

      {/* Glass Morphism Contact Form */}
      <div className="w-full max-w-md mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Send me a message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 p-4 shadow-lg">
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-400/60 dark:border-white/30 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 py-2 px-1 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-400/60 dark:border-white/30 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 py-2 px-1 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full bg-transparent border border-gray-400/50 dark:border-white/30 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 py-2 px-3 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg backdrop-blur-sm transition-all duration-200 font-medium ${
                isSubmitting
                  ? "bg-gray-400/50 text-gray-600 dark:text-gray-400 cursor-not-allowed"
                  : "bg-[tomato] hover:bg-red-500 text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      {/* Open to Work below form */}
      <div className="flex items-center gap-2 mt-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-green-600 dark:text-green-400 font-semibold text-sm font-poppins">
          Open to Work
        </span>
      </div>
    </div>
  );
}
