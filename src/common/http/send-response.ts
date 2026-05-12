import { HttpStatus } from '@nestjs/common';
import { ApiResponse } from '../types/api-response.interface';

export const sendResponse = <T>({
    statusCode = HttpStatus.OK,
    message = 'Success',
    data,
}: Partial<ApiResponse<T>>): ApiResponse<T> => {
    return {
        statusCode,
        message,
        data,
    };
};