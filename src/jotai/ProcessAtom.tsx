import { ProcAtomType } from "@/types/AtomTypes";
import { atom, createStore, WritableAtom } from "jotai";
import createAtomSet from "./createAtomSet";

export const [] = createAtomSet<ProcAtomType>();
