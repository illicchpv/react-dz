export function loadState<T>(key: string): T | undefined {
  try {
    const jsonState = localStorage.getItem(key);
    if(!jsonState) return undefined;
    const r = JSON.parse(jsonState)
    return r;
  } catch (e) {
    console.warn('loadState parsing error', e);
    return undefined;
  }
}

export function saveState<T>(state: T, key: string) {
  try {
    const stringState = JSON.stringify(state);
    localStorage.setItem(key, stringState);
  } catch (e) {
    console.warn('saveState parsing error', e);
  }
}