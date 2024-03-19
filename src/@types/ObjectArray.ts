export type Dict<T = unknown> = { [k: string]: T };
export type Arr<T = unknown> = T[];

export type IsObject<T> = T extends Record<string, unknown> ? true : false;
export type IsArray<T> = T extends unknown[] ? true : false;

export type ValueOf<T> = T[keyof T];
export type Merge<T> = { [K in keyof T]: T[K] };
