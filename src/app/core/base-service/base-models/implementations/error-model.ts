import { IErrorModel } from './../interfaces/ierror-model';

export class ErrorModel implements IErrorModel {
  constructor(
    public errorText = ""
  ) {}
}
