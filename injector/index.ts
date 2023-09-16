import { IHelloViewModel } from "@/lib/greetings/view-model/hello-view-model";
import container from "./container.injector";
import { HelloType } from "./type.injector";

const helloViewModel = container.get<IHelloViewModel>(HelloType.ViewModel)

export default helloViewModel