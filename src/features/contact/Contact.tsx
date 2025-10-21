import { Link } from "@/components/internal/Link";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblzeavl"; // Replace with your Formspree form ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setToast({ type: "success", message: "Message sent successfully!" });
      } else {
        setToast({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch {
      setToast({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    }
    setIsSubmitting(false);
    // Hide toast after 4 seconds
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="text-base md:text-lg font-mono">
        Reach me at&nbsp;
        <BoxReveal boxColor="#c27aff">
          <Link color="purple" link="mailto:sujalbhugul08@gmail.com">
            <span className="font-bold">sujalbhugul08@gmail.com</span>
          </Link>
        </BoxReveal>
      </div>

      {/* Responsive flex row for form and mini section */}
      <div className="w-full flex flex-col md:flex-row gap-8 mt-6 md:items-stretch">
        {/* Glass Morphism Contact Form */}
        <div className="w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Send me a message
          </h3>
          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
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

              {/* Subject Input */}
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
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
              {/* Formspree Branding */}
              <div className="mt-4 flex items-center justify-center text-xs gap-1">
                <span className="font-bold uppercase text-black dark:text-white mr-2">
                  FORM BY
                </span>
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold uppercase text-black dark:text-white flex items-center gap-1"
                >
                  <img
                    src="/svg/logos/formspree-icon.svg"
                    alt="Formspree logo"
                    className="w-5 h-5 inline-block"
                  />
                  <span style={{ letterSpacing: "0.05em" }}>FORMSPREE</span>
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Mini Section: Get In Touch - Hidden on mobile */}
        <div className="hidden md:block w-80 flex-shrink-0">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Get In Touch
          </h3>
          <div
            className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 p-6 shadow-lg flex flex-col justify-between"
            style={{ minHeight: "calc(100% - 3rem)" }}
          >
            <div className="space-y-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-600 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-800 dark:text-gray-200 break-all">
                    sujalbhugul08@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    +91 9322733751
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    Amravati, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-4 border-t border-white/20 dark:border-white/10">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                Connect with me
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/sujal23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <img
                    src="/svg/logos/linkedin (1).svg"
                    alt="LinkedIn"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://x.com/sujal_bhugul?t=IFGoFmQzvSiixtsQK-o2_Q&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-sky-500/20 hover:bg-sky-500/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <img
                    src="/svg/logos/twitter (1).svg"
                    alt="Twitter"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://discordapp.com/users/sujal230841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <img
                    src="/svg/logos/discord-svgrepo-com.svg"
                    alt="Discord"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://leetcode.com/u/sujalbhugul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-orange-500/20 hover:bg-orange-500/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <img
                    src="/svg/logos/leetcode.svg"
                    alt="LeetCode"
                    className="w-4 h-4"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Message */}
      {toast && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg font-semibold text-base flex items-center gap-2 transition-all duration-300
          ${
            toast.type === "success"
              ? "bg-green-400/80 text-gray-900 border border-green-500/40"
              : "bg-red-400/80 text-gray-900 border border-red-500/40"
          }
          backdrop-blur-xl`}
        >
          {toast.type === "success" ? (
            <svg
              className="w-5 h-5 text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-red-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <span>{toast.message}</span>
        </div>
      )}

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
