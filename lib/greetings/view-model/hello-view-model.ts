import { makeAutoObservable } from "mobx"
import { HelloRepository } from "../data/repository/hello-repository"

export interface IHelloViewModel {
    getHelloServer: () => string
}

export class HelloViewModel implements IHelloViewModel {
    private helloRepository: HelloRepository
    private helloClientObservable: string = ""

    constructor({ helloRepository }: { helloRepository: HelloRepository }) {
        this.helloRepository = helloRepository

        makeAutoObservable(this)
    }

    getHelloServer = (): string => this.helloRepository.getServerSideData().getMessage()
}