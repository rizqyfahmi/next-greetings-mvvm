import helloViewModel from "@/injector"

const HelloServerView = () => {
    return (
        <div>{helloViewModel.getHelloServer()}</div>
    )
}

export default HelloServerView