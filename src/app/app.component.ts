import { Component } from '@angular/core';

class Row {
  coins: number;
  count = 1;
  accumulated = 0;
  accumulatedP = 0;

  constructor(coins: number) {
    this.coins = coins;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'めっちゃ回すやつ';
  rate = 10;
  count = 10000;
  unitPrice = 500;
  totalRevenue = 0;
  result: Array<Row> = [];
  startLabel = '回す';

  start() {
    this.startLabel = '回してます';
    this.result = [];
    for (let i = 0; i < this.count; i++) {
      let x = 1;
      while (Math.random() > this.rate / 100) {
        x++;
      }

      const found = this.result.find(r => r.coins === x);
      if (found) {
        found.count++;
      } else {
        this.result.push(new Row(x));
      }
    }
    this.result.sort((a, b) => a.coins - b.coins);
    this.totalRevenue = 0;
    this.result.forEach((r, index, array) => {
      if (index === 0) {
        r.accumulated = r.count;
      } else {
        r.accumulated = array[index - 1].accumulated + r.count;
      }
      r.accumulatedP = r.accumulated / this.count;
      this.totalRevenue += r.coins * this.unitPrice * r.count;
    });
    this.startLabel = '回す';
  }
}
