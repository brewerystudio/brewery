import { withWindow } from "../constants"

const SHOUT_CACHE = {} as { [shoutName: string]: any }

export class Shout {
	/**
	 * Broadcast a Shout with keyword arguments.
	 */
	public static publish = (name: string, kwargs: any = {}) => {
		const event = new CustomEvent(name, { detail: kwargs })
		withWindow(w => w.dispatchEvent(event))
	}

	/**
	 * Listen to a Shout with a certain name and perform the callback when it occurs.
	 */
	public static subscribe = (name: string, callback: (kwargs?: any) => void) => {
		const onFire = (event: Event) => {
			const kwargs = (event as any).detail
			callback(kwargs || {})
		}
		withWindow(w => w.addEventListener(name, onFire))
		SHOUT_CACHE[name] = onFire
	}

	/**
	 * Stop listening to the shout. The callback must match the callback used in subscribe().
	 */
	public static unsubscribe = (name: string) => {
		if (SHOUT_CACHE.hasOwnProperty(name)) {
			withWindow(w => w.removeEventListener(name, SHOUT_CACHE[name]))
			delete SHOUT_CACHE[name]
		} else {
			console.error(`Could not find Shout with name "${name}"`)
		}
	}
}
