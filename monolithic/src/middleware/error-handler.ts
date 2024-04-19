import { ErrorRequestHandler } from "express";
import { AppError } from "../lib/api-error";
import { StatusCodes } from "../constants";
import { isDevelopmentEnvironment } from "../utils";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    let error = err;

    if (!(err instanceof AppError)) {
        const statusCode = err.statusCode || StatusCodes.INTERNAL_ERROR;
        const message = err.message || 'Something went wrong!';
        error = new AppError(statusCode, message, err?.errors || [], err?.stack);
    }
    const response = {
        ...error,
        message: error?.message,
        ...(isDevelopmentEnvironment() ? { stack: error.stack } : {})
    }

    return res.status(error.statusCode).json(response);
}