export class Navigation {
	
	public static go = (url:string, newTab:boolean|null = false, replace:boolean|null = false, title:string|null = null) => {
        if (replace) {
            window.history.pushState({}, '', url)
        } else {
            window.open(url, newTab ? '_blank' : undefined)
        }
        title && Navigation.setTitle(title)
    }
	
	public static getPath = () => {
        return window.location.pathname
    }

    public static setTitle = (title: string) => {
        document.title = title
    }

}
