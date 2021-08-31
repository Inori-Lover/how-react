export const jsx = (
  type: string,
  config: unknown,
  maybeKey?: string | number,
) => {
  let key = null;
  if (maybeKey !== undefined) {
    key = '' + maybeKey;
  }

  return [type, config, maybeKey];
};

export const Fragment = () => {};

export { jsx as jsxs, jsx as jsxDEV };
