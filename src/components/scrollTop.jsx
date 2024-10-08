import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed  bottom-2 right-2 lg:bottom-8 lg:right-8 z-30">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full   text-white  bg-shockersAEC/20  shadow-2xl   transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:text-shockersAEC"
          style={{ transition: "transform 0.2s ease-in-out" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-arrow-up"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
