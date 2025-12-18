import { Link } from "react-router-dom";

interface FilmCardProps {
  name: string;
  releaseYear: string | number;
  imageLink: string;
  id: string;
}

export const FilmCard = ({ name, releaseYear, imageLink, id }: FilmCardProps) => {
  return (
    <Link to={`/films/${id}`} key={id}>
      <div className="flex flex-col bg-blue-200 rounded-xl w-80 shadow-lg hover:scale-108 hover:shadow-xl transition-all p-4">
        <div>
          <img src={imageLink} alt={name} className="w-full rounded-xl" />
        </div>

        <div className="flex justify-evenly mt-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-xl font-bold">{releaseYear}</p>
        </div>
      </div>
    </Link>
  );
};
