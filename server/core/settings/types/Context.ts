import { Context } from "elysia";
import { User } from "../../types/User";

export type ReqContext<T = any, S = any> = Context & {
  user?: User;
  body: T;
  params: S;
};
