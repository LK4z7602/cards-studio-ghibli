import { FilmCard } from "../../components/FilmCard";
import useFilms from "../../hooks/useFilms";

export const Home = () => {
    const { data, isLoading, error } = useFilms();

  if (isLoading) return <div className="flex justify-center items-center min-h-screen">Carregando...</div>;
  if (error) return <div className="flex justify-center items-center min-h-screen">Erro ao carregar filmes</div>;

  return (
    <>
      <main className="flex flex-wrap gap-14 justify-center m-6 min-h-screen">
        {data.map((film) => (
          <FilmCard
            key={film.title}
            name={film.title}
            imageLink={film.image}
            releaseYear={film.release_date}
            id={film.id}
          />
        ))}
      </main>
    </>
  );
};
