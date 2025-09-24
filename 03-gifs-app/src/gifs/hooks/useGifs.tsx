import { useState } from 'react';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);
  
    const handleTermClicked = (term: string) => {
      handleSearch(term);
    };
  
    const handleSearch = async (raw: string = "") => {
      if (!raw.trim()) return;
  
      const query = raw.trim().toLowerCase();
      if (previousTerms.includes(query)) return;
  
      setPreviousTerms((prev) => [query, ...prev].slice(0, 8));
  
      try {
        const results = await getGifsByQuery(query);
        setGifs(results);                          // <--- guardar gifs
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        console.warn("No se pudieron obtener gifs para:", query);
      }
    };
  
  
  
  
    return {
        //Properties
        gifs,

        // Methods
        handleSearch,
        handleTermClicked,
        previousTerms,

    }
}
