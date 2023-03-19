import {useSignal} from "@preact/signals";

interface Props {
    contract: string
}

export default function Contract({contract}: Props) {
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
            <div class="flex flex-col items-center justify-center mt-8 gap-4 ">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick} >
                    Deploy
                </button>
                <p>{contractAddress}</p>
            </div>
        </>
    );
}