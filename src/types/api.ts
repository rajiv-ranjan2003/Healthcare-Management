export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
 
export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}
 //<T> is a generic type parameter that allows the ApiResponse to be flexible with the type of data it returns.
export interface PaginatedResponse<T> {
  data: T[];
  //pagination is used to handle large datasets by breaking them into smaller chunks.
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}