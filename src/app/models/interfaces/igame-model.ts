import { GameType } from 'src/app/core/enums/gameType';

export interface IGameModel {
	id: number;
	name: string;
	type: GameType;
	description: string;
	rating: number;
}
