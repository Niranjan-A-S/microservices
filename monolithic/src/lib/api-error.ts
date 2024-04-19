export class AppError extends Error {
    statusCode: number
    data: null | any
    errors: any[]
    stack?: string | undefined;
    success: boolean
    constructor(statusCode: number, message: string = 'Something went wrong!', errors: any[] = [], stack = '') {
        super(message)
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors;
        this.message = message;
        this.success = false;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
