import { ErrorModel } from './../implementations/error-model';
export interface IBaseObservableModel<T> {
  data: T;
  error: ErrorModel;
}
