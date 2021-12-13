import {useQuery} from 'react-query';
import axios from 'axios';
import {Character} from '../types';

const fetchMovie = async (movieId: number) => {
  try {
    const {data} = await axios.get(
      `https://swapi.py4e.com/api/films/${movieId}`,
    );

    const getTopFiveCharacters = (charactersArray: string[]): string[] => {
      const topFiveCharacters = charactersArray.slice(0, 5);
      return topFiveCharacters;
    };
    const characters = getTopFiveCharacters(data.characters);

    const topFiveCharacters: Character[] = await Promise.all(
      characters.map(async (characterUrl: string) => {
        const {data: character} = await axios.get(characterUrl);
        const {name, gender} = character;
        const speciesUrl = character.species[0];
        const {data: species} = await axios.get(speciesUrl);
        const {name: speciesName} = species;
        return {name, speciesName, gender};
      }),
    );

    return topFiveCharacters;
  } catch (error) {
    console.error(error);
  }
};

const useMovie = (movieId: number) =>
  useQuery(['movies', movieId], () => fetchMovie(movieId));
export default useMovie;
