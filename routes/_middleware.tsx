import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { cookieSession, WithSession } from "https://deno.land/x/fresh_session@0.2.0/mod.ts";

export type State = {} & WithSession;

const session = cookieSession();

function sessionHandler(req: Request, ctx: MiddlewareHandlerContext<State>) {
    return session(req, ctx);
}
export const handler = [sessionHandler];