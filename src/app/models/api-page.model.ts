export interface ApiResponse {
  content: any[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {};
  size: number;
  sort: {};
  totalElements: number;
  totalPages: number;
}
