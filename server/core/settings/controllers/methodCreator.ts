import { ReqContext } from "../types/Context";

export const methodCreator = <T = any, S = any>(fn: ControllerMethod<T, S>) => {
  return (ctx: ReqContext<T, S>) => {
    try {
      fn(ctx);
    } catch (error) {
      console.log(error, "heyyyy");
    }
  };
};

type ControllerMethod<T, S> = (ctx: ReqContext<T, S>) => any;
