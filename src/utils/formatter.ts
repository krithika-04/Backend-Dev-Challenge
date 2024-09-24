// src/utils/responseFormatter.ts

interface ApiResponse<T> {
    status: string;
    message: string;
    data?: T;
    error?: string;
  }
  
  const formatResponse = <T>(data: T, message: string = 'Success'): ApiResponse<T> => {
    return {
      status: 'success',
      message,
      data
    };
  };
  
  const formatErrorResponse = (error: string, message: string = 'Error'): ApiResponse<null> => {
    return {
      status: 'error',
      message,
      error
    };
  };
  
  export { formatResponse, formatErrorResponse, ApiResponse };
  