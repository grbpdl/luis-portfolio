export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-[#2b2b2b] text-[#d9d9d9] px-4 py-2 rounded-md capitalize font-extrabold transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg h-auto "
      >
        {children}
      </button>
    );
  }
  