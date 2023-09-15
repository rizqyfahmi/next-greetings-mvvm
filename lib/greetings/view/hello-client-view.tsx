"use client"
import { observer } from "mobx-react-lite"
import { HelloViewModel } from "../view-model/hello-view-model"
import { HelloRepository } from "../data/repository/hello-repository"
import { HelloRemote } from "../data/source/hello-remote"

const Content = observer(
    ({ helloVM }: { helloVM: HelloViewModel }) => {
        return (
            <div>
                <div>{helloVM.getHelloClient()}</div>
                <div>
                    <div>
                        <input
                            type="text"
                            onChange={(e) => helloVM.setHelloClientObservable(e.target.value)}
                            placeholder="Type here..."
                            className="border rounded-lg p-4"
                        />
                    </div>
                    <div>{helloVM.getHelloClientObservable()}</div>
                </div>
            </div>
        )
    }
)

const HelloClientView = () => {
    const helloRemote = new HelloRemote()
    const helloRepository = new HelloRepository({ helloRemote: helloRemote })
    const helloVM = new HelloViewModel({ helloRepository: helloRepository })

    return <Content helloVM={helloVM} />
}

export default HelloClientView