export const colors = {
    // Shades
	black: '#000000',
	dark: '#333333',
	medium: '#737373',
    light: '#D9DADB',
    white: '#FFFFFF',
    
    // Colors
	primary: '#FF4C4C', 
    secondary: '#011627',
	tertiary: '#F3D250',
    quaternary: '#5DA2D5',
    
    // Other
	clear: 'transparent',
}

const hexToRgb = (hex: string) => {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	hex = hex.replace(shorthandRegex, (m, r, g, b) => {
		return r + r + g + g + b + b
	})
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	const obj = result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null
	return obj
}

export const transparent = (color: string, alpha: number): string => {
	let rgb: any = {}
	try {
		rgb = hexToRgb(color)
		return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
	} catch {
		return color
	}
}
