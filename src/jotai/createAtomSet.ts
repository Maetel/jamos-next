import { WritableAtom, createStore } from "jotai";

type AtomArgType<T> = T | ((prev: T) => T);

export type Store = ReturnType<typeof createStore>;
export const defaultStore = createStore();

export default function createAtomSet<T = any>(
  initalValue?: T,
  store?: Store,
): [
  WritableAtom<T, unknown[], unknown>,
  () => T | undefined,
  (arg: AtomArgType<T>) => void,
] {
  // @ts-ignore
  const theAtom = atom<T>(initalValue);
  const dstStore = store ?? defaultStore;
  return [
    theAtom,
    (() => dstStore.get(theAtom)) as () => T | undefined,
    ((arg: AtomArgType<T>) => dstStore.set(theAtom, arg)) as (
      arg: AtomArgType<T>,
    ) => void,
  ];
}
