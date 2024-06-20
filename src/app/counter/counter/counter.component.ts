import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {

  // counter: number = 0;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  // onIncrement() {
  //   this.counter++;
  // }

  // onDecrement() {
  //   this.counter--;
  // }

  // onReset() {
  //   this.counter = 0;
  // }
}
