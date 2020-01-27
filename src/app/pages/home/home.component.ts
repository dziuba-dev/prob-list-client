import { ListModel } from './../../models/implementations/list-model';
import { ListObservableService } from './../../services/observable/list-observable.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IListModel } from 'src/app/models/interfaces';
import { MatSort } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


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
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this._subscriptionList.unsubscribe();
  }
}
