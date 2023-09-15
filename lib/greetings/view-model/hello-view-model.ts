import { makeAutoObservable } from "mobx"
import { HelloRepository } from "../data/repository/hello-repository"

export interface IHelloViewModel {
    setHelloClientObservable: (helloClientObservable: string) => void
    getHelloClientObservable: () => string
    getHelloClient: () => string
    getHelloServer: () => string
}

export class HelloViewModel implements IHelloViewModel {
    private helloRepository: HelloRepository
    private helloClientObservable: string = ""

    constructor({ helloRepository }: { helloRepository: HelloRepository }) {
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