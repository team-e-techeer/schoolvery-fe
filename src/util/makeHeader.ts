export function makeHeader(token: string) {
  return { 'Content-type': 'Application/json', Accept: '*/*', Authorization: `Bearer ${token}` };
}
