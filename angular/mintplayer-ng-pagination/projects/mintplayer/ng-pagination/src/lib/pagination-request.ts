export class PaginationRequest {
    perPage: number = 20;
    page: number = 1;
    sortProperty: string = '';
    sortDirection: 'ascending' | 'descending' = 'ascending';
}
