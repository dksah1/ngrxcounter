import { signalStore, withComputed, withState } from '@ngrx/signals';
import { Book } from './book.model';
import { filter } from 'rxjs';
import { computed } from '@angular/core';

type BookState = {
  books: Book[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initalState: BookState = {
  books: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initalState),
  withComputed(({ books, filter }) => ({
    booksCount: computed(() => books().length),
    storedBooks: computed(() => {
      const direction = filter.order() === 'asc' ? 1 : -1;
    }),
  }))
);
