import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Selecciona y enfoca el input
    inputRef.current?.select();
    inputRef.current?.focus();
  };

  return (
    <div className="bg-gradient flex flex-col gap-6 items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-white">Focus Screen</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe algo aquí..."
        className="bg-white text-black px-4 py-2 rounded-md w-64 shadow-md focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all shadow-md"
        onClick={handleClick}
      >
        Set Focus
      </button>
    </div>
  );
};
