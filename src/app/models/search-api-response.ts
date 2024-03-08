import { Person } from "./person";


export interface SearchApiResponse{
    content: Person[],
    totalPages: number,
    totalElements: number
}