import { makeAutoObservable } from "mobx"
import type { IHelloRepository } from "../data/repository/hello-repository"
import { inject, injectable } from "inversify"
import { HelloType } from "@/injector/type.injector"

export interface IHelloViewModel {
    setHelloClientObservable: (helloClientObservable: string) => void
    getHelloClientObservable: () => string
    getHelloClient: () => string
    getHelloServer: () => Promise<string>
}

// @injectable is a way of telling the compiler that we want to inject this class as a dependency
@injectable()
export class HelloViewModel implements IHelloViewModel {
    private helloRepository: IHelloRepository
    private helloClientObservable: string = ""

    constructor(
        // @inject is used to inject an interface of dependency
        @inject(HelloType.Repository) helloRepository: IHelloRepository
    ) {
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
    
    getHelloServer = async (): Promise<string> => {
        const result = await this.helloRepository.getServerSideData()
        if (typeof result === "string") {
            return result
        }

        return result.getMessage()
    }
}