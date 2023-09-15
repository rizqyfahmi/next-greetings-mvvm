import { Hello } from "../model/hello";
import { IHelloRemote } from "../source/hello-remote";

export interface IHelloRepository {
    getServerSideData: () => Hello
    getClientSideData: () => Hello
}

export class HelloRepository implements IHelloRepository{
    private helloRemote: IHelloRemote

    constructor({ helloRemote }: { helloRemote: IHelloRemote }) {
        this.helloRemote = helloRemote
    }

    getServerSideData = (): Hello => this.helloRemote.getDataForServerSideRendering();

    getClientSideData = (): Hello => this.helloRemote.getDataForClientSideRendering();

}