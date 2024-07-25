import { ReqContext } from "./Context";

export type BaseError = {
  check?: boolean;
  message?: string;
  ctx?: ReqContext;
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
