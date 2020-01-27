import { ListObservableService } from './../observable/list-observable.service';
import { Injectable } from '@angular/core';
import { GameType } from 'src/app/core/enums/gameType';
import { IGameModel, IMovieModel } from 'src/app/models/interfaces';
import { MovieType } from 'src/app/core/enums/movieType';
import { ListMapperService } from '../mapper/list-mapper.service';

@Injectable({
  providedIn: 'root'
})
export class ListCommunicationService {
  private _gameList: Array<IGameModel> = [
    {
      id: 1,
      name: 'Super Mario Galaxy 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: GameType.Others,
      rating: 5
    },
    {
      id: 2,
      name: 'The Legend of Zelda: Breath of the Wild',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: GameType.Others,
      rating: 4
    },{
      id: 3,
      name: 'The Last of Us Remastered',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      type: GameType.FPS,
      rating: 5
    }
  ]

  private _movieList: Array<IMovieModel> = [
    {
      id: 1,
      name: 'Harry Potter i Zakon Feniksa',
      author: 'David Yates',
      type: MovieType.Comedy,
      rating: 4
    },
    {
      id: 2,
      name: 'Jobs',
      author: 'Joshua Michael Stern',
      type: MovieType.Document,
      rating: 5
    },
    {
      id: 3,
      name: 'Shrek',
      author: 'Andrew Adamson',
      type: MovieType.Animation,
      rating: 5
    }
  ]

  constructor(private _listObservableService: ListObservableService, private _listMapperService: ListMapperService) { }

  getList() {
    this._listObservableService.addList(this._listMapperService.IGameArrayAndIMovieArrayToIListArray(this._gameList, this._movieList));
  }
}
