interface ReturnParam {
  [key: string]: unknown;
}

export function getQueryString(queryString: string) {
  const split = queryString.replace('?', '').split(/[=?&]/);
  const params: ReturnParam = {};

  for (let i = 0; i < split.length; i++) {
    params[split[i]] = split[++i];
  }
  return params;
}
