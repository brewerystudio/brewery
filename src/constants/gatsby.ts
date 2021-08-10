export const isBrowser = typeof window !== "undefined"
export const withWindow = (callback: (window: Window)=>void) => {
    if (isBrowser) {
        callback(window)
    }
}
