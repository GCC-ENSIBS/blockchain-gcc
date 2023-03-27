import Contract from "../islands/Contract.tsx";
import {Head} from "$fresh/src/runtime/head.ts";
import Header from "../components/Header.tsx";
import {lucky_code, reentrancy_code} from "../utils/codes.ts";

export default function Contracts() {
    return (
        <>
            <Head>
                <title>Contracts</title>
            </Head>
            <Header active="/contracts"/>
            <div class="flex flex-col items-center justify-center">
                <Contract contract={"lucky"} title={"Lucky"} code={lucky_code} />
                <Contract contract={"reentrancy"} title={"Re-Entrancy"} code={reentrancy_code}/>
            </div>
        </>
    );
}