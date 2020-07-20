import { CreateLocalStore } from "./types"
import { readLocalStorage, writeLocalStorage } from "@bytesoftio/helpers-local-storage"
import { createStore, ObservableStore } from "@bytesoftio/store"

const cache: Record<string, ObservableStore<any>> = {}

export const createLocalStore: CreateLocalStore = <TState extends object>(storageKey, initialState) => {
  let store = cache[storageKey] as ObservableStore<TState>

  if ( ! store) {
    store = createStore(readLocalStorage(storageKey, initialState))
    store.listen((state) => writeLocalStorage(storageKey, state))
    cache[storageKey] = store
  }

  return store
}
