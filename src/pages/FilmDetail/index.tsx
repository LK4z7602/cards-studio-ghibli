import { Link, useParams } from "react-router-dom";
import { X } from "lucide-react";
import useFilms from "../../hooks/useFilms";

export const FilmDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFilms();
  const filmDetail = data.find((film) => film.id === id);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Carregando...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Erro ao carregar filme
      </div>
    );

  return (
    <>
      <div className="bg-blue-950 flex flex-col items-center min-h-screen pt-8 text-white gap-4 relative text-center max-[490px]:pt-10">
        <Link to="/" className="absolute left-6 top-8 max-[490px]:relative">
          <X size={50} className="text-white hover:scale-[1.25] transition-transform lg:scale-150 max-[490px]:absolute max-[490px]:right-1/2 max-[490px]:bottom-4" />
        </Link>
        <h2 className="text-4xl font-primary mb-5">{filmDetail?.title}</h2>
        <img
          src={filmDetail?.image}
          alt={filmDetail?.title}
          className="w-80 rounded-2xl"
        />
        <p className="max-w-180 mt-4 text-md px-2">
          {filmDetail?.description}
        </p>
        <p className="font-secondary text-2xl">
          Director: {filmDetail?.director}
        </p>
        <p className="font-secondary text-2xl">
          Producer: {filmDetail?.producer}
        </p>
        <p className="font-secondary text-2xl">{filmDetail?.release_date}</p>
      </div>
    </>
  );
};