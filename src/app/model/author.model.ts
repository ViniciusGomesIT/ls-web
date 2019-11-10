import { LiteraryGenre } from './literary-genre.model';
import { Book } from './book.model';

export interface Author {
    id: number,
    name: string,
    genres: LiteraryGenre[],
    books: Book[]
}