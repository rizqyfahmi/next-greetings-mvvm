import { Hello } from "../model/hello";

export interface IHelloRemote {
    getDataForServerSideRendering: () => Hello
}

export class HelloRemote implements IHelloRemote {
    getDataForServerSideRendering = (): Hello => {
        return new Hello({
            message: "Hello Server Side!"
        })
    }
}