import URI from 'urijs'

export class URL {
	public static go = (urlOrPath: string, newTab: boolean = false) => {
		window.open(urlOrPath, newTab ? undefined : '_self')
	}

	// Gets a value from query object.
	public static getFromQuery = (fromURL: string, key: string): string | null => {
		const urlObj = URI(fromURL).query(true) as any
		return urlObj.hasOwnProperty(key) ? urlObj[key] : null
	}

	// Appends a query from a provided object to the passed URL.
	public static appendQuery = (toURL: string, query: any) => {
		const uri = URI(toURL)
		for (const key in query) {
			if (uri.hasQuery(key)) {
				uri.setQuery(key, query[key])
			} else {
				uri.addQuery(key, query[key])
			}
		}
		uri.normalizeQuery()
		return String(uri)
	}
}
