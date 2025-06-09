export function set(key: string, value: any): void {
    const json: string = JSON.stringify(value);
    localStorage.setItem(key, json);
}

export function get(key: string): any {
    const json: string = localStorage.getItem(key);
    
    if (json === null) return null;

    return JSON.parse(json);
}
