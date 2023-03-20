import {Head} from "$fresh/src/runtime/head.ts";
import Header from "../components/Header.tsx";
import FaucetForm from "../islands/FaucetForm.tsx";

export default function Faucet() {
    return (
        <>
            <Head>
                <title>Faucet</title>
            </Head>
            <Header active="/faucet"/>
            <div class="flex flex-col items-center justify-center my-8 ">
                <h1 class={"text-center text-4xl font-bold mt-32 "}>Faucet</h1>
                <FaucetForm/>
            </div>
        </>
    );
}