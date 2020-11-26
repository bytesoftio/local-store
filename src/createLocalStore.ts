import { CreateLocalStore } from "./types"
import { readLocalStorage, writeLocalStorage } from "@bytesoftio/helpers-local-storage"
import { createStore, ObservableStore } from "@bytesoftio/store"

const cache: Record<string, ObservableStore<any>> = {}

export const createLocalStore: CreateLocalStore = <TValue extends object>(storageKey, initialValue) => {
  let store = cache[storageKey] as ObservableStore<TValue>

  if ( ! store) {
    store = createStore(readLocalStorage(storageKey, initialValue))
    store.listen((newValue) => writeLocalStorage(storageKey, newValue))
    cache[storageKey] = store
  }

  return store
}
