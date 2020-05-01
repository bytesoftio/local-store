import { ObservableStore } from "@bytesoftio/store"

export type CreateLocalStore = <S extends object>(storageKey: string, initialState: S) => ObservableStore<S>