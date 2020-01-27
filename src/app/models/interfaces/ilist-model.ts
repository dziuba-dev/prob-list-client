import { IMovieModel } from './imovie-model';
import { IGameModel } from './igame-model';
import { GameType } from 'src/app/core/enums/gameType';
import { MovieType } from 'src/app/core/enums/movieType';

export interface IListModel {
  position: number;
	name: string;
  typeGame: string;
  typeMovie: string;
	author: string;
	description: string;
	rating: number;
}
