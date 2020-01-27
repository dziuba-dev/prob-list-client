import { BaseObservableService } from './base-observable-service';
import { BehaviorSubject } from 'rxjs';

export abstract class BaseBehaviorSubjectObservableService<T> extends BaseObservableService<T> {
  constructor(clearObject: T) {
    super(clearObject);
  }

  initSubject() {
    this.subject = new BehaviorSubject(this.observableSubject);
    this.observable = this.subject.asObservable();
  }
}
