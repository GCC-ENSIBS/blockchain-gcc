import Contract from "../islands/Contract.tsx";
import {Head} from "$fresh/src/runtime/head.ts";
import Header from "../components/Header.tsx";
import {bienvenue_code, lucky_code, reentrancy_code} from "../utils/codes.ts";

export default function Contracts() {
    return (
        <>
            <Head>
                <title>Contracts</title>
            </Head>
            <Header active="/contracts"/>
            <div class="flex flex-col items-center justify-center">
                <Contract contract={"bienvenue"} title={"Bienvenue"} code={bienvenue_code} check={true}/>
                <Contract contract={"lucky"} title={"Lucky"} code={lucky_code} check={true}/>
                <Contract contract={"reentrancy"} title={"Re-Entrancy"} code={reentrancy_code} check={false}/>
            </div>
        </>
    );
}