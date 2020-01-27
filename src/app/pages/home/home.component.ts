import { ListModel } from './../../models/implementations/list-model';
import { ListObservableService } from './../../services/observable/list-observable.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IListModel } from 'src/app/models/interfaces';
import { MatSort } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public displayedColumns: string[] = ['position', 'name', 'typeGame', 'typeMovie', 'author', 'description', 'rating'];
  public dataSource = new MatTableDataSource<ListModel>();

  private _subscriptionList: Subscription;

  constructor(private _listObservableService: ListObservableService) { }

  ngOnInit() {
    this.initObservable();

    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = function(data: IListModel, filter: string): boolean {
      if (!Number.isInteger(parseInt(filter))) {
        return !filter || data.name.toLowerCase().includes(filter) || data.description.toLowerCase().includes(filter)
        || data.typeGame.toLowerCase().includes(filter) || data.typeMovie.toLowerCase().includes(filter);
      }
      return true;
    }
  }

  public initObservable() {
    this._subscriptionList = this._listObservableService.observable.subscribe(
      value => {
        this.dataSource = new MatTableDataSource(value.data);
      }
    );
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this._subscriptionList.unsubscribe();
  }
}
