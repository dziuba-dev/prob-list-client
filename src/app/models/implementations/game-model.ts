import { IGameModel } from '../interfaces/igame-model';
import { GameType } from 'src/app/core/enums/gameType';

export class GameModel implements IGameModel {
  constructor(
    public id = 0,
    public name = "",
    public type = GameType.Others,
    public description = "",
    public rating = 0
  ) {}
}
