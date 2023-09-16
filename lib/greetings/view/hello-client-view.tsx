"use client"

import { observer } from "mobx-react-lite"
import { IHelloViewModel } from "../view-model/hello-view-model"
import helloViewModel from "@/injector"

const Content = observer(
    ({ helloVM }: { helloVM: IHelloViewModel }) => {
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
    
    return <Content helloVM={helloViewModel} />
}

export default HelloClientView