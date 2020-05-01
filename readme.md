# @bytesoftio/local-store

## Installation

`yarn add @bytesoftio/local-store` or `npm install @bytesoftio/local-store`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [createLocalStore](#createlocalstore)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This library is built on top of the [@bytesoftio/store](https://github.com/bytesoftio/store) package and provides an integration with `localStorage`. This way your application state can survive page reloads, etc. Check out the docs of the other package to find a more in depth guide.

## createLocalStore

Since [@bytesoftio/store](https://github.com/bytesoftio/store) is used underneath, stores produced by this and the other package are interchangeable. A store created by `createLocalStore` can be used with `useStore` function from the [@bytesoftio/use-store](https://github.com/bytesoftio/use-store).

```tsx
import React from "react"
import { createLocalStore } from "@bytesoftio/local-store"
import { useStore } from "@bytesoftio/use-store"

// state shared between components and services, cached in localStorage
const authStore = createLocalStore("auth", { token: "abcde" })

const Component = () => {
  const [state, setState, addState, resetState] = useStore(authStore)
  // local component state, created through an initializer function, cached in localStorage
  const [persistentState, setPersistentState] = useStore(() => createLocalStore("counter", {count: 0}))

  const increment = () => setPersistentState({count: persistentState.count + 1})

  return (
    <div>
      <span>Auth token: {state.token}</span>
      <button onClick={increment}>{persistentState.count}</button>
    </div>
  )
}
```