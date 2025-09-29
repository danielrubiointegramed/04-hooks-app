// CryptoPage.tsx
import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";

type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
};

export const CryptoPage = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const { counter, increment, decrement } = useCounter();

  // Ajustar índice (counter empieza en 1, array es base 0)
  const current = coins[counter - 1];

  // Cargar lista de criptos al montar
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data))
      .catch((err) => console.error("Error al cargar criptos:", err));
  }, []);

  // Función para dar formato tipo #001
  const formatIndex = (num: number) => num.toString().padStart(3, "0");

  // Estado de carga
  if (!current) {
    return (
      <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-gradient-x">
        <h1 className="text-2xl font-thin text-white">Crypto</h1>
        <h3 className="text-xl font-bold text-white">Cargando...</h3>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo dinámico animado */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center p-6">
        <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
          Crypto Dashboard
        </h1>

        <h3 className="text-2xl font-bold text-white mb-2">
          #{formatIndex(counter)} {current.name} ({current.symbol.toUpperCase()})
        </h3>

        <p className="text-lg text-yellow-300 font-semibold mb-4">
          Precio actual: ${current.current_price.toLocaleString()}
        </p>

        <img
          src={current.image}
          alt={current.name}
          className="w-32 h-32 mb-6 drop-shadow-2xl animate-bounce"
        />

        <div className="flex gap-4">
          <button
            onClick={decrement}
            disabled={counter === 1}
            className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-500 text-white px-6 py-2 rounded-md disabled:opacity-50 transition-all duration-300 shadow-lg"
          >
            Anterior
          </button>
          <button
            onClick={increment}
            disabled={counter === coins.length}
            className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-500 text-white px-6 py-2 rounded-md disabled:opacity-50 transition-all duration-300 shadow-lg"
          >
            Siguiente
          </button>
        </div>

        <p className="text-white mt-6 text-lg font-medium">
          {counter} / {coins.length}
        </p>
      </div>
    </div>
  );
};
