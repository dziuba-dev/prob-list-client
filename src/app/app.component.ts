import { Component, OnInit } from '@angular/core';
import { ListCommunicationService } from './services/communication/list-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PROB';

  constructor(private _listCommunicationService: ListCommunicationService) {}

  ngOnInit() {
    this._listCommunicationService.getList();
  }
}
