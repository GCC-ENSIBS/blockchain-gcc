export interface Contract {
    name: string;
    abi: any;
    bytecode: string;
    code: string;
}

export const contracts: Contract[] = [];

for await (const dirEntry of Deno.readDir('../contracts/')) {
    if (!dirEntry.isFile && dirEntry.name.endsWith('.sol')) {
        continue
    }
    const code = Deno.readFileSync("../contracts/" + dirEntry.name).toString();

    const p = Deno.run({cmd: ["solc", "--abi", "--bin", "../contracts/"+dirEntry.name]});
    await p.status();
    console.log(new TextDecoder().decode(await p.output()));

    contracts.push({
        name: dirEntry.name,
        code: code,
    });
}
