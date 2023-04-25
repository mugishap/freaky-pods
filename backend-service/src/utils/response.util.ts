export class ApiResponse {
    success: boolean
    message: string
    data: unknown

    constructor(success: boolean, message: string, data: unknown) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}