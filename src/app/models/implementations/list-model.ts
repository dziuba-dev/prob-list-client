import { MovieModel } from './movie-model';
import { GameModel } from './game-model';
import { IListModel } from './../interfaces/ilist-model';
import { GameType } from 'src/app/core/enums/gameType';
import { MovieType } from 'src/app/core/enums/movieType';

export class ListModel implements IListModel {
  constructor(
    public position = 0,
    public name = "",
    public typeGame = "",
    public typeMovie = "",
    public author  = "",
    public description  = "",
    public rating = 0
  ) {}
}
