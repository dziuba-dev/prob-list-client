import { IBaseObservableModel } from './../interfaces/ibase-observable-model';
export class BaseObservableModel<T> implements IBaseObservableModel<T> {
  constructor(
    public data,
    public error
  ) {}
}
