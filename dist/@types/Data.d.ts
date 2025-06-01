import { Dict } from './ObjectArray';
export type Lv<L, V> = {
    label: L;
    value: V;
} & Dict;
export type Vl<V, L> = Lv<V, L>;
