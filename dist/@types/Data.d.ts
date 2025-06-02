import { Dict } from './ObjectArray';
export type Lv<L = any, V = any> = {
    label: L;
    value: V;
} & Dict;
export type Vl<V = any, L = any> = Lv<V, L>;
