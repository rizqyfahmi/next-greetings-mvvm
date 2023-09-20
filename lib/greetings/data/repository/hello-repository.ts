import { inject, injectable } from "inversify";
import { Hello } from "../model/hello";
import type { IHelloRemote } from "../source/hello-remote";
import { HelloType } from "@/injector/type.injector";

export interface IHelloRepository {
    getServerSideData: () => Promise<Hello | string>
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

    getServerSideData = async (): Promise<Hello | string> => {
        // Make an API request into data source
        const response = await this.helloRemote.getDataForServerSideRendering();
        // Get response data
        const model = response.getData()
        // Check whether model is undefined or not
        if (!model) {
            return response.getMessage()
        }
        // Return a model when there is no error (success)
        return model as Hello
    }

    getClientSideData = (): Hello => this.helloRemote.getDataForClientSideRendering();

}