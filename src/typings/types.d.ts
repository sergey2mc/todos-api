export type PickProperty<T, K extends keyof T> = T[K];

export type Extend<T, K> = T & K;
