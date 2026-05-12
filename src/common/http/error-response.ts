import { HttpStatus } from '@nestjs/common';
import { ApiResponse } from "../types/api-response.interface";

export const errorResponse = ({
    statusCode = HttpStatus.INTERNAL_SERVER_ERROR,
    message = 'Something went wrong',
    errors = null,
}: Partial<ApiResponse>): ApiResponse => {
    return {
        statusCode,
        message,
        errors,
    };
};