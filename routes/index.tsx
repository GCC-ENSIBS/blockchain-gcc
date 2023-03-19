import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import IconCurrencyEthereum from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/currency-ethereum.tsx"
import IconLetterX from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/letter-x.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockchain GCC</title>
      </Head>
        <Header active="/" />
        <h1 class={"text-center text-4xl font-bold mt-32"}>Welcome to private Ethereum Blockchain</h1>
        <div class="flex flex-row items-center justify-center mt-8 ">
            <IconCurrencyEthereum class="w-64 h-64 text-black" />
            <IconLetterX class="w-24 h-24 text-black" />
            <img src={"/logo_gcc.svg"} class={"w-60 h-60 m-10"} />
        </div>
        <h2 class={"text-center text-2xl font-bold mt-32"}>RPC Endpoint</h2>
        <h2 class={"text-center text-2xl font-italic"}>http://blockchain.gcc-ensibs.fr:8545</h2>
    </>
  );
}
