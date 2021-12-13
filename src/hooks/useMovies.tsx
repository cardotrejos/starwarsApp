import {useQuery} from 'react-query';
import axios from 'axios';
import {MoviesDataResults} from '../types';

const fetchMovies = async () => {
  const {data} = await axios.get('https://swapi.py4e.com/api/films');
  return data.results.map(
    ({title, episode_id, release_date}: MoviesDataResults) => ({
      title,
      episode_id,
      release_date,
    }),
  );
};

const useMovies = () => useQuery('movies', fetchMovies);
export default useMovies;
