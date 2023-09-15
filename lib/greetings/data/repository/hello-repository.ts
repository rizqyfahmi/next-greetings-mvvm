import { Hello } from "../model/hello";
import { HelloRemote } from "../source/hello-remote";

export interface IHelloRepository {
    getServerSideData: () => Hello
}

export class HelloRepository implements IHelloRepository{
    private helloRemote: HelloRemote

    constructor({ helloRemote }: { helloRemote: HelloRemote }) {
        this.helloRemote = helloRemote
    }

    getServerSideData = (): Hello => this.helloRemote.getDataForServerSideRendering();

}