import Contract from "../../islands/Contract.tsx";
import {Head} from "$fresh/src/runtime/head.ts";
import Header from "../../components/Header.tsx";
import {calculator_code} from "../../utils/codes.ts";

export default function Calculator() {
    return (
        <>
            <Head>
                <title>Calculator</title>
            </Head>
            <Header active="/contracts/calculator"/>
            <div class="flex flex-col items-center justify-center my-8 ">
                <h1 class={"text-center text-4xl font-bold mt-32 "}>Calculator</h1>
                <code style={"white-space: pre-line;white-space: pre-wrap;"}
                      class="items-center text-lg font-bold mt-4 mx-auto rounded-xl bg-gray-100 p-4">
                    {calculator_code}
                </code>
            </div>
            <Contract/>
        </>
    );
}