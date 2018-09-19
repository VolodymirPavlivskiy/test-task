import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'test-task';
  selected: string = 'ETH';
  money: string = 'UAH';
  buttonColor: string = 'rgb(136, 195, 88)';
  textColor: string = 'rgb(15, 48, 81)';
  quentity: number = 5;
  myMoney: number = 37000;
  onChangeCoin() {
    this.selected = 'BTC';
  }
  getMoney(item) {
    switch(item) {
      case 'UAH' :
        this.money = 'UAH';
        break;
      case 'RUB':
        this.money = 'RUB';
        break;
      case 'USD': 
        this.money = 'USD';
        break;
    }
  }
}
