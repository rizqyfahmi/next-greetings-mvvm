import { makeAutoObservable } from "mobx"
import { IHelloRepository } from "../data/repository/hello-repository"

export interface IHelloViewModel {
    setHelloClientObservable: (helloClientObservable: string) => void
    getHelloClientObservable: () => string
    getHelloClient: () => string
    getHelloServer: () => string
}

export class HelloViewModel implements IHelloViewModel {
    private helloRepository: IHelloRepository
    private helloClientObservable: string = ""

    constructor({ helloRepository }: { helloRepository: IHelloRepository }) {
        this.helloRepository = helloRepository

        makeAutoObservable(this)
    }

    setHelloClientObservable = (helloClientObservable: string) => {
        this.helloClientObservable = helloClientObservable
    }

    getHelloClientObservable = (): string => {
        return this.helloClientObservable 
    }

    getHelloClient = (): string => this.helloRepository.getClientSideData().getMessage()
    
    getHelloServer = (): string => this.helloRepository.getServerSideData().getMessage()
}