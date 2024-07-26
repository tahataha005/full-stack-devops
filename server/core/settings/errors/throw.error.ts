import { error } from "elysia";
import { BaseError, Forbidden, NotFound, Unauthorized } from "../types/Error";

export const throwBadRequest = ({ check, message, ctx }: BaseError) => {
  if (check) {
    throw error(400, message);
  }
};

export const throwUnauthorized = ({
  check,
  message,
  reason,
  ctx,
}: Unauthorized) => {
  if (check) {
    const errorMessage = message ?? `Unauthorized: ${reason}`;

    throw error(401, errorMessage);
  }
};

export const throwForbidden = ({ check, message, action, ctx }: Forbidden) => {
  if (check) {
    const errorMessage = message ?? `Forbidden: Tried ${action}`;

    throw error(403, errorMessage);
  }
};

export const throwNotFound = ({ check, message, entity, ctx }: NotFound) => {
  if (check) {
    const errorMessage = message ?? `${entity} not found`;

    throw error(404, errorMessage);
  }
};

export const throwInternalServerError = (message: string) => {
  throw error(500, message);
};
