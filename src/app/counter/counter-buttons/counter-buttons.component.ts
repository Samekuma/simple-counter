import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: CounterState }>) {}
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  onIncrement() {
    // this.increment.emit();
    this.store.dispatch(increment());
  }
  onDecrement() {
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }
  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
