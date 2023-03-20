import {useSignal} from "@preact/signals";

export default function FaucetForm() {
    let address = useSignal("")
    let resp = useSignal("")

    function handleClick() {
        // request to /api/deploy
        fetch("/api/faucet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                address: address.value
            }),
        }).then((res) => res.json()).then((data) => {
            resp.value = data.response;
        }).catch((err) => {
            resp.value = "Error"
            console.log(err);
        });
    }

    return (
        <>
            <div class="flex flex-col items-center justify-center mt-8 gap-4 ">
                <p className={""}>Type your ETH address to get ETH on our Blockchain</p>
                <input value={address.value} onChange={(e) => address.value = e.target.value}
                       class={"px-3 py-2 w-96 bg-white rounded border(gray-500 2)"} />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick} >
                    Get ETH
                </button>
                <p>{resp}</p>
            </div>
        </>
    );
}