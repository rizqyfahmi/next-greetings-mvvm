import { useHelloViewModel } from "@/injector"

const HelloServerView = () => {
    const helloVM = useHelloViewModel()

    return (
        <div>{helloVM.getHelloServer()}</div>
    )
}

export default HelloServerView