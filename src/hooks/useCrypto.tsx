// src/hooks/useCrypto.ts
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

interface Crypto {
  id: string;
  name: string;
  imageUrl: string;
  current_price?: number;
}

export const useCrypto = ({ id }: Props) => {
  const [crypto, setCrypto] = useState<Crypto | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCryptoById = async (id: string) => {
    if (!id) return; // evita fetch vacío
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      const data = await response.json();
      setCrypto({
        id: data.id,
        name: data.name,
        imageUrl: data.image.large,
        current_price: data.market_data.current_price.usd,
      });
    } catch (error) {
      console.error("Error al obtener la cripto:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCryptoById(id);
  }, [id]);

  return {
    crypto,
    isLoading,

    formattedId: id.toString().padStart(3, "0"),
  };
};
