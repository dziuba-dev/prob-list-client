import * as _ from 'lodash';
import { IListModel } from './../../models/interfaces/ilist-model';
import { ListModel } from './../../models/implementations/list-model';
import { Injectable } from '@angular/core';
import { BaseBehaviorSubjectObservableService } from 'src/app/core/base-service/base-behavior-subject-observabele-service';

@Injectable({
  providedIn: 'root'
})
export class ListObservableService extends BaseBehaviorSubjectObservableService<Array<IListModel>> {

  constructor() {
    super(new Array<ListModel>())
  }

  addList(list: Array<IListModel>) {
    this.observableSubject.data = list;
    this.subject.next(_.cloneDeep(this.observableSubject));
  }
}
