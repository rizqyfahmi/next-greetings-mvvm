import helloViewModel from "@/injector"

const HelloServerView = async () => {
    const result = await helloViewModel.getHelloServer()
    return (
        <div>{result}</div>
    )
}

export default HelloServerView