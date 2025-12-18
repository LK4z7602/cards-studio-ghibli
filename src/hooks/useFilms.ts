import { useQuery } from "@tanstack/react-query";

interface Film {
  title: string;
  image: string;
  description: string;
  release_date: string;
  id: string;
  director: string;
  producer: string;
  rt_score: number;
}

const useFilms = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<Film[]>({
    queryKey: ["films"],
    queryFn: async () => {
      const response = await fetch("https://ghibliapi.vercel.app/films");
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false, 
  });

  return { data, isLoading, error };
};

export default useFilms;
