export interface ITask {
    _id?: string;
    name: string;
    status?: "ALL" | "COMPLETED" | "STARTED" | "NOT_STARTED"
    description: string;
    createdAt?: string;
}