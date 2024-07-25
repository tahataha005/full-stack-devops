export const catchErrors = (fn: Function) => {
  try {
    return fn();
  } catch (error) {
    const message = error.message || error;
    const status = error.status || 500;
    const stack = error.stack || null;
    const name = error.name || "Error";

    console.log(
      `Error: ${name} - Status: ${status} - Message: ${message} - Stack: ${stack}`
    );
  }
};
