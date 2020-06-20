export class Navigation {
	
	public static go = (url:string, newTab:boolean|null = false, replace:boolean|null = false) => {
        if (replace) {
            window.history.pushState({}, '', url)
        } else {
            window.open(url, newTab ? '_blank' : undefined)
        }
    }
	
	public static getPath = () => {
        return window.location.pathname
    }

}
