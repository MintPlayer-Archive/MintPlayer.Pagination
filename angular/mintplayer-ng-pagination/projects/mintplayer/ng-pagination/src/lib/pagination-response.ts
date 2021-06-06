export class PaginationResponse<T> {
    perPage: number = 20;
    page: number = 1;
    
    data: T[] = [];
    totalRecords: number = 0;
    totalPages: number = 0;
}
