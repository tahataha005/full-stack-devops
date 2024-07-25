import { catchErrors } from "../errors/catch.error";
import { ReqContext } from "../types/Context";

export const methodCreator = <T = any, S = any>(fn: ControllerMethod<T, S>) => {
  return catchErrors(() => fn);
};

type ControllerMethod<T, S> = (ctx: ReqContext<T, S>) => any;
