import { Component } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent {
  value!: number;
  constructor(private store: Store<{ counter: CounterState }>) {}

  onAdd() {
    this.store.dispatch(customIncrement({ value: Number(this.value) }));
    this.value = 0;
    console.log(this.value);
  }
}
