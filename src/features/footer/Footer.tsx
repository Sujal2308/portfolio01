import { useEffect, useState } from "react";

export function Footer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    "Thanks visiting my portfolio", // English
    "मेरा पोर्टफोलियो देखने के लिए धन्यवाद", // Hindi
    "माझे पोर्टफोलिओ भेट दिल्याबद्दल धन्यवाद", // Marathi
    "Gracias por visitar mi portafolio", // Spanish
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <footer className="py-4 text-sm border-t-2 border-natural-400 dark:border-neutral-700 text-neutral-400 bg-background">
      <div className="container flex justify-between max-w-3xl px-10 mx-auto">
        <div className="inline-flex items-center gap-2">
          <span className="min-h-[20px] transition-opacity duration-500 ease-in-out">
            {messages[currentIndex]}
          </span>
        </div>
        <p>2025</p>
      </div>
    </footer>
  );
}
