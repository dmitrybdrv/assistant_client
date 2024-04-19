
export const useLocalStorage = (key: string) => {

    const setItem = (value: unknown) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.log(e)
        }
    }

    const getItem = () => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : undefined
        } catch (e) {
            console.log(e)
        }
    }

    return {setItem, getItem}
}