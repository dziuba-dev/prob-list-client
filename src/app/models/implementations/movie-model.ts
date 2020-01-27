import { MovieType } from 'src/app/core/enums/movieType';
import { IMovieModel } from '../interfaces/imovie-model';

export class MovieModel implements IMovieModel {
  constructor(
    public id = 0,
    public name = "",
    public type = MovieType.Animation,
    public author = "",
    public rating = 0
  ) {}
}
