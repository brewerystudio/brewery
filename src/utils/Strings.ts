export class Strings {
    private static escapeRegExp = (str: string) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    }

    public static replaceAll = (str: string, match: string, replacement: string) => {
        return str.replace(new RegExp(Strings.escapeRegExp(match), 'g'), () => replacement)
    }
}
