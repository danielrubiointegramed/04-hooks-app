import { useState } from "react";
import { CryptoPage } from "./03-examples/CryptoPage";
import { TrafficLight } from "./01-useState/TrafficLight";
import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
import { FocusScreen } from "./04-useRef/FocusScreen";

type View = "crypto" | "light" | "effect" | "hook" | "focus";

export const App = () => {
  const [view, setView] = useState<View>("crypto");

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Menú de navegación */}
      <nav className="flex justify-center gap-4 p-4 bg-gray-800 shadow-md">
        <button
          className={`px-4 py-2 rounded-md transition ${
            view === "crypto" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setView("crypto")}
        >
          Crypto
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            view === "light" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setView("light")}
        >
          Semáforo (useState)
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            view === "effect" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setView("effect")}
        >
          Semáforo (useEffect)
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            view === "hook" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setView("hook")}
        >
          Semáforo (useHook)
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            view === "focus" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setView("focus")}
        >
          Focus
        </button>
      </nav>

      {/* Render dinámico */}
      <main className="flex-1 flex items-center justify-center p-6">
        {view === "crypto" && <CryptoPage />}
        {view === "light" && <TrafficLight />}
        {view === "effect" && <TrafficLightWithEffect />}
        {view === "hook" && <TrafficLightWithHook />}
        {view === "focus" && <FocusScreen />}
      </main>
    </div>
  );
};
