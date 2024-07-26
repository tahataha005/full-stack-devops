import { ReqContext } from "./Context";

export type BaseError = {
  ctx: ReqContext;
  check?: boolean;
  message?: string;
};

export type NotFound = BaseError & {
  entity: string;
};

export type Unauthorized = BaseError & {
  reason: string;
};

export type Forbidden = BaseError & {
  action: string;
};
