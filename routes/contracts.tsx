import Contract from "../islands/Contract.tsx";
import {Head} from "$fresh/src/runtime/head.ts";
import Header from "../components/Header.tsx";
import {calculator_code, lucky_code, randomgame_code} from "../utils/codes.ts";

export default function Contracts() {
    return (
        <>
            <Head>
                <title>Contracts</title>
            </Head>
            <Header active="/contracts"/>
            <div class="flex flex-col items-center justify-center my-8">
                <h1 class={"text-center text-4xl font-bold mt-12 "}>Lucky</h1>
                <code style={"white-space: pre-line;white-space: pre-wrap;"}
                      class="items-center text-md font-bold mt-4 mx-auto rounded-xl bg-gray-100 p-4">
                    {lucky_code}
                </code>
                <Contract contract={"lucky"} />
            </div>
            <div className="flex flex-col items-center justify-center my-8">
                <h1 className={"text-center text-4xl font-bold mt-12 "}>RandomGame</h1>
                <code style={"white-space: pre-line;white-space: pre-wrap;"}
                      className="items-center text-md font-bold mt-4 mx-auto rounded-xl bg-gray-100 p-4">
                    {randomgame_code}
                </code>
                <Contract contract={"randomgame"}/>
            </div>

        </>
    );
}