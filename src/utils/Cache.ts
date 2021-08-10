import { Objects } from './Objects'
import { Storage } from './Storage'

type FetchFunction<T> = (key: string)=>Promise<T | null>
interface CacheEntry<T> {
    item: T
    expiry?: number
}

export class Cache<T> {
    private storageKey: string
    private fetchFunction: FetchFunction<T>
    private expiryMs?: number

    constructor(storageKey: string, fetchFunction: FetchFunction<T>, expiryMs?: number) {
        this.storageKey = storageKey
        this.fetchFunction = fetchFunction
        this.expiryMs = expiryMs
    }

    public get = async (key: string): Promise<T | null> => {
        const fetchTime = Date.now()
        let cache = Storage.get(this.storageKey) as any
        if (Objects.isNullish(cache) || !Objects.isObject(cache)) {
            cache = {}
        }
        if (cache.hasOwnProperty(key)) {
            const entry = cache[key] as CacheEntry<T>
            if (entry && (!entry.expiry || entry.expiry > fetchTime)) {
                return entry.item
            } else {
                delete cache[key]
            }
        }
        const item = await this.fetchFunction(key)
        if (!item) {
            return null
        }
        const expiry = this.expiryMs ? fetchTime + this.expiryMs : undefined
        const newEntry = {
            item,
            expiry,
        }
        cache[key] = newEntry
        Storage.set(this.storageKey, cache)
        return item
    }

    public expire = (key: string) => {
        // We delete from Cache instead of expiring because
        // (a) both render the value useless, in practice
        // (b) it saves space
        const cache = Storage.get(this.storageKey) as any
        if (cache.hasOwnProperty(key)) {
            delete cache[key]
            Storage.set(this.storageKey, cache)
        }
    }
}
