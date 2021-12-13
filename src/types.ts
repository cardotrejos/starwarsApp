import {StackScreenProps} from '@react-navigation/stack';

export type Character = {
  name: string;
  speciesName: string;
  gender: string;
};

export type MoviesDataResults = {
  title: string;
  episode_id: number;
  release_date: Date;
};

export type MainStackParamList = {
  Movies: undefined;
  Movie: {movie: MoviesDataResults};
};

export type MoviesProps = StackScreenProps<MainStackParamList, 'Movies'>;

export type MovieProps = StackScreenProps<MainStackParamList, 'Movie'>;
