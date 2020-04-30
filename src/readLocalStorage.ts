export const readLocalStorage = <S>(key: string, defaultValue: S): S => {
  try {
    return JSON.parse(localStorage.getItem(key) || "") || defaultValue
  } catch (error) {
    return defaultValue
  }
}