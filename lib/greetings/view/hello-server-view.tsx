"use client"
import { HelloViewModel } from "../view-model/hello-view-model"
import { HelloRemote } from "../data/source/hello-remote"
import { HelloRepository } from "../data/repository/hello-repository"

const HelloServerView = () => {
    const helloRemote = new HelloRemote()
    const helloRepository = new HelloRepository({ helloRemote: helloRemote })
    const helloVM = new HelloViewModel({ helloRepository: helloRepository })
    return (
        <div>{helloVM.getHelloServer()}</div>
    )
}

export default HelloServerView