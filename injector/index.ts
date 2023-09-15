import { HelloRepository } from "@/lib/greetings/data/repository/hello-repository"
import { HelloRemote } from "@/lib/greetings/data/source/hello-remote"
import { HelloViewModel } from "@/lib/greetings/view-model/hello-view-model"

export const useHelloViewModel = (): HelloViewModel => {
    const helloRemote = new HelloRemote()
    const helloRepository = new HelloRepository({ helloRemote: helloRemote })
    const helloVM = new HelloViewModel({ helloRepository: helloRepository })

    return helloVM
}