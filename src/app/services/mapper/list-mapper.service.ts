import { MovieType } from 'src/app/core/enums/movieType';
import { GameType } from './../../core/enums/gameType';
import { ListModel } from './../../models/implementations/list-model';
import { Injectable } from '@angular/core';
import { IGameModel, IMovieModel, IListModel } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListMapperService {

  constructor() { }

  IGameArrayAndIMovieArrayToIListArray(gameSrc: Array<IGameModel>, movieSrc: Array<IMovieModel>): Array<IListModel> {
    let dest = new Array<ListModel>();
    let position = 1;
    gameSrc.forEach((item) => {
      dest.push(this.IGameToIList(item, position));
      position++;
    });
    movieSrc.forEach((item) => {
      dest.push(this.IMovieToIList(item, position));
      position++;
    });

    return dest;
  }

  IMovieToIList(src: IMovieModel, position: number): ListModel {
    let dest = new ListModel(position, src.name, "", this._getMovieType(src.type), src.author, "", src.rating);
    return dest;
  }

  IGameToIList(src: IGameModel, position: number): ListModel {
    let dest = new ListModel(position, src.name, this._getGameType(src.type), "", "", src.description, src.rating);
    return dest;
  }

  private _getGameType(gameType: GameType): string {
    switch (gameType) {
      case 0:
        return "RPG";
      case 1:
        return "FPS";
      case 2:
        return "RTS";
      case 3:
        return "Other";
      default:
        return "--";
    }
  }

  private _getMovieType(movieType: MovieType): string {
    switch (movieType) {
      case 0:
        return "Horro";
      case 1:
        return "Comedy";
      case 2:
        return "Animation";
      case 3:
        return "Document";
      default:
        return "--";
    }
  }
}
