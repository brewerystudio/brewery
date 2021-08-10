import { isBrowser, withWindow } from "../constants"

const KEYBOARD_CACHE = {} as { [shoutName: string]: any }

export enum KeyboardKey {
    'Escape' = 27
}

export class Keyboard {
	public static watch = (eventName: string, key: KeyboardKey, callback: (event?: KeyboardEvent) => void) => {
		const onKeyDown = (event: KeyboardEvent) => {
			if(event.keyCode === key) {
                callback(event)
            }
		}
        KEYBOARD_CACHE[eventName] = onKeyDown
		isBrowser && document.addEventListener("keydown", onKeyDown, false)
	}

	public static unwatch = (eventName: string) => {
		try {
            if (KEYBOARD_CACHE.hasOwnProperty(eventName)) {
                withWindow(w => w.removeEventListener(eventName, KEYBOARD_CACHE[eventName]))
                delete KEYBOARD_CACHE[eventName]
            } else {
                console.error(`Could not find Keyboard event with name "${eventName}"`)
            }
        } catch {}
	}
}
