import 'reflect-metadata'
import { HelloRemote, IHelloRemote } from "@/lib/greetings/data/source/hello-remote";
import { Container } from "inversify";
import { HelloRepository, IHelloRepository } from "@/lib/greetings/data/repository/hello-repository";
import { HelloViewModel, IHelloViewModel } from "@/lib/greetings/view-model/hello-view-model";
import { HelloType } from "./type.injector";

const container = new Container()
container.bind<IHelloRemote>(HelloType.Remote).to(HelloRemote)
container.bind<IHelloRepository>(HelloType.Repository).to(HelloRepository)
container.bind<IHelloViewModel>(HelloType.ViewModel).to(HelloViewModel)

export default container