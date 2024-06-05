import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { BooksStore } from './book.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.scss'],
  providers: [BooksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookstoreComponent {
  readonly store = inject(BooksStore);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('Books state changed', state);
    });
  }
}
