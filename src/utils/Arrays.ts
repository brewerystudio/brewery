import { Objects } from "./Objects"

export class Arrays {
    public static shuffled = (arr: any[]) => {
        const copied = Objects.copy(arr)
        let i = copied.length
        if (i === 0) {
            return copied
        }
        let j = 0
        let temp = 0
        while (i--) {
            j = Math.floor(Math.random() * (i + 1))
            temp = copied[i]
            copied[i] = copied[j]
            copied[j] = temp
        }
        return copied
    }
}