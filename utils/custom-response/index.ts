export class CustomResponse<E> {

    private status: boolean;
    private message: string;
    private data?: E

    constructor({ status, message, data }: { status: boolean, message: string, data?: E }) {
        this.status = status
        this.message = message
        this.data = data
    }

    public getStatus(): boolean {
        return this.status
    }

    public getMessage(): string {
        return this.message
    }

    public getData(): E | undefined {
        return this.data
    }
}