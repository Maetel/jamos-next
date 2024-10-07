import createAtomSet from "./createAtomSet";

export interface Log {
  content: string;
  type: "log" | "warn" | "error" | "system";
  time: string; //Date().toDatestring()
}

export interface LogState {
  logs: Log[];
}

export const [logAtom, getLogAtom, setLogAtom] = createAtomSet<LogState>({
  logs: [],
});
