import { injectable } from "inversify";
import { Hello } from "../model/hello";

export interface IHelloRemote {
    getDataForServerSideRendering: () => Hello
    getDataForClientSideRendering: () => Hello
}

// @injectable is a way of telling the compiler that we want to inject this class as a dependency
@injectable()
export class HelloRemote implements IHelloRemote {
    getDataForServerSideRendering = (): Hello => {
        return new Hello({
            message: "Hello Server Side!"
        })
    }
    
    getDataForClientSideRendering = (): Hello => {
        return new Hello({
            message: "Hello Client Side!"
        })
    }
}