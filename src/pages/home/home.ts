import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetailsPage } from '../details/details'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toDoItems: any[];

  constructor(public navCtrl: NavController) {
    this.toDoItems = [
      {
        "toDo": "Learn HTML",
        "description": "Learn HTML coding",
        "dueDate": "2017-07-17",
        "priority": 1,
        "notes:": ""
      }
      , {
        "toDo": "Learn CSS",
        "description": "Learn CSS coding",
        "dueDate": "2017-07-18",
        "priority": 1,
        "notes:": ""
      }
      , {
        "toDo": "Learn JavaScript",
        "description": "Learn JavaScript coding",
        "dueDate": "2017-07-19",
        "priority": 1,
        "notes:": ""
      }
      , {
        "toDo": "Learn npm",
        "description": "Learn npm CLI",
        "dueDate": "2017-07-20",
        "priority": 2,
        "notes:": ""
      }
      , {
        "toDo": "Learn TypeScript",
        "description": "Learn TypeScript coding",
        "dueDate": "2017-07-21",
        "priority": 2,
        "notes:": ""
      }
    ];
  }

  showDetails(item): void {
    console.log(item);
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
