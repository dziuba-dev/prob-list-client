import * as _ from 'lodash';
import { BaseObservableModel } from './base-models/implementations/base-observable-model';
import { IBaseObservableModel } from './base-models/interfaces/ibase-observable-model';
import { Subject, Observable } from 'rxjs';
export abstract class BaseObservableService<T> {
  public observable: Observable<IBaseObservableModel<T>>;

  protected cleanObservableSubject: T;
  protected observableSubject: IBaseObservableModel<T>;
  protected subject: Subject<IBaseObservableModel<T>>;

  constructor(clearObject: T) {
    this.cleanObservableSubject = _.cloneDeep(clearObject);
    this.observableSubject = new BaseObservableModel(_.cloneDeep(clearObject), "");
    this.initSubject();
  }

  abstract initSubject();

  public addError(error: string) {
    this.observableSubject.error.errorText = error;
    this.subject.next(_.cloneDeep(this.observableSubject));
  }

  public addData(value: T) {
    this.observableSubject.data = _.cloneDeep(value);
    this.subject.next(_.cloneDeep(this.observableSubject));
  }
}
