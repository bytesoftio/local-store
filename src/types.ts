import { ObservableStore } from "@bytesoftio/store"

export type CreateLocalStore = <TValue extends object>(storageKey: string, initialValue: TValue) => ObservableStore<TValue>
