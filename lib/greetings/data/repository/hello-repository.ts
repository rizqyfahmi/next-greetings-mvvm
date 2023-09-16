import { inject, injectable } from "inversify";
import { Hello } from "../model/hello";
import type { IHelloRemote } from "../source/hello-remote";
import { HelloType } from "@/injector/type.injector";

export interface IHelloRepository {
    getServerSideData: () => Hello
    getClientSideData: () => Hello
}

// @injectable is a way of telling the compiler that we want to inject this class as a dependency
@injectable()
export class HelloRepository implements IHelloRepository{
    private helloRemote: IHelloRemote

    constructor(
        // @inject is used to inject an interface of dependency
        @inject(HelloType.Remote) helloRemote: IHelloRemote
    ) {
        this.helloRemote = helloRemote
    }

    getServerSideData = (): Hello => this.helloRemote.getDataForServerSideRendering();

    getClientSideData = (): Hello => this.helloRemote.getDataForClientSideRendering();

}