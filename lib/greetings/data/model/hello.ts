type Props = {
    message: string
}

export class Hello {
    private message: string

    constructor({ message }: Props) {
        this.message = message
    }

    getMessage = (): string => this.message
    
}