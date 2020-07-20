import { ObservableStore } from "@bytesoftio/store"

export type CreateLocalStore = <TState extends object>(storageKey: string, initialState: TState) => ObservableStore<TState>
