export class PaginationRequest {
    perPage = 20;
    page = 1;
    sortProperty = '';
    sortDirection: 'ascending' | 'descending' = 'ascending';
}
