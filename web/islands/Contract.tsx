import {useSignal} from "@preact/signals";

interface Props {
    contract: string
    title: string
    code: string
}

export default function Contract({contract, title, code}: Props) {
    let contractAddress = useSignal("Not deployed yet !")

    function handleClick() {
        contractAddress.value = "Deploying..."
        // request to /api/deploy
        fetch("/api/deploy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contract: contract
            }),
        }).then((res) => res.json()).then((data) => {
            contractAddress.value = `Contract deployed at ${data.address}`
        });
    }

    return (
        <>
            <div class="flex flex-col items-center justify-center my-4 gap-4">
                <h1 className={"text-center text-4xl font-bold mt-12 "}>{title}</h1>
                <code style={"white-space: pre-line;white-space: pre-wrap; "}
                      className="items-center text-md font-bold mt-4 mx-auto rounded-xl bg-gray-100 p-4">
                    {code}
                </code>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick} >
                    Deploy
                </button>
                <p>{contractAddress}</p>
            </div>
        </>
    );
}