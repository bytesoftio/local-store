import { createStore, HookStore } from "@bytesoftio/use-store"
import { CreateLocalStore } from "./types"
import { readLocalStorage } from "./readLocalStorage"
import { writeLocalStorage } from "./writeLocalStorage"

const cache: Record<string, HookStore<any>> = {}

export const createLocalStore: CreateLocalStore = <S extends object>(storageKey, initialState) => {
  let store = cache[storageKey] as HookStore<S>

  if ( ! store) {
    store = createStore(readLocalStorage(storageKey, initialState))
    store.listen((state) => writeLocalStorage(storageKey, state))
    cache[storageKey] = store
  }

  return store
}