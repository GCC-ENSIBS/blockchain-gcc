// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_middleware.tsx";
import * as $1 from "./routes/api/check.ts";
import * as $2 from "./routes/api/deploy.ts";
import * as $3 from "./routes/api/faucet.ts";
import * as $4 from "./routes/contracts.tsx";
import * as $5 from "./routes/faucet.tsx";
import * as $6 from "./routes/index.tsx";
import * as $$0 from "./islands/Contract.tsx";
import * as $$1 from "./islands/FaucetForm.tsx";

const manifest = {
  routes: {
    "./routes/_middleware.tsx": $0,
    "./routes/api/check.ts": $1,
    "./routes/api/deploy.ts": $2,
    "./routes/api/faucet.ts": $3,
    "./routes/contracts.tsx": $4,
    "./routes/faucet.tsx": $5,
    "./routes/index.tsx": $6,
  },
  islands: {
    "./islands/Contract.tsx": $$0,
    "./islands/FaucetForm.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
