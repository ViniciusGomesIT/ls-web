import { PublishingCompany } from './publishing-company.model';
import { LiteraryGenre } from './literary-genre.model';
import { Author } from './author.model';

export interface Book {
    id: number,
    name: string,
    publishingCompany: PublishingCompany,
    yearPublication: number,
    genre: LiteraryGenre,
    authors: Author[]  
}