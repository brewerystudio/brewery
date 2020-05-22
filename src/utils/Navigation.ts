export class Navigation {
	
	public static go = (url:string, newTab:boolean = false) => {
        window.open(url, newTab ? '_blank' : undefined)
    }

}
