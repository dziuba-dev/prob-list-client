import { MovieType } from 'src/app/core/enums/movieType';

export interface IMovieModel {
	id: number;
	name: string;
	type: MovieType;
	author: string;
	rating: number;
}
