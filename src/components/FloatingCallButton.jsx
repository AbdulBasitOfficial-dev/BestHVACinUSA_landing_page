import { FiPhone } from "react-icons/fi";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+13239909291"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#16a34a] transition-colors group"
      aria-label="Call us"
    >
      <FiPhone className="text-xl" />

      {/* Tooltip */}
      <span className="absolute right-16 bg-[#0f2744] text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Call Now
      </span>
    </a>
  );
};

export default FloatingCallButton;
