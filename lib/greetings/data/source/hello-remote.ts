import { Hello } from "../model/hello";

export interface IHelloRemote {
    getDataForServerSideRendering: () => Hello
    getDataForClientSideRendering: () => Hello
}

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