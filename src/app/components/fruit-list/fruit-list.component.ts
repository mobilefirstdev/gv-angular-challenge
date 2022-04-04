import { Component, OnInit } from '@angular/core';
import {FruitListViewModel} from './fruit-list-view-model';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss'],
  providers: [FruitListViewModel]
})
export class FruitListComponent implements OnInit {

  constructor(public viewModel: FruitListViewModel) {

  }

  ngOnInit(): void {
  }

}
