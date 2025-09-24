
import { GifList } from "./gifs/components/GigList";
import { PreviousSearches } from "./gifs/components/PreviusSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./mock-dat/shared/components/CustomHeader";
import { SearchBar } from "./mock-dat/shared/components/SearchBar";


export const GifsApp = () => {

  const {
    handleSearch,
    handleTermClicked,
    previousTerms,
    gifs
  } = useGifs();
  
  return (
    <>
      <CustomHeader title="Buscador de Gifs" subtitle="Encuentra los mejores gifs aquí" />

      <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />

      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Mostrar resultados en GifList */}
      <GifList gifs={gifs} />
    </>
  );
};
