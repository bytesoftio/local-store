import { HookStore } from "@bytesoftio/use-store"

export type CreateLocalStore = <S extends object>(storageKey: string, initialState: S) => HookStore<S>