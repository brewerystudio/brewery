import { Strings } from "./Strings"

export class Formatter {
	public static phone(value: string): string {
		const m = value.match(/^(\d{3})(\d{3})(\d{4})$/)
		return m ? m[1] + '-' + m[2] + '-' + m[3] : value
	}

	public static stringDate(date: Date): string {
		let month = '' + (date.getMonth() + 1)
		let day = '' + date.getDate()
		const year = date.getFullYear()

		if (month.length < 2) {
			month = '0' + month
		}
		if (day.length < 2) {
			day = '0' + day
		}

		return [year, month, day].join('-')
	}

	public static username(value: string): string {
		return value.toLowerCase()
	}

	public static money = (value: number): string => {
		const maximumFractionDigits = value < 0.1 ? 12 : value < 1 ? 8 : value < 10 ? 4 : 2
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits }).format(value)
	}

	public static capitalize = (value: string): string => {
		return Strings.replaceAll(value, '-', '_').split('_').map(v => `${v.charAt(0).toUpperCase()}${v.slice(1).toLowerCase()}`).join(' ')
	}

	// Source: https://stackoverflow.com/a/48419805/7432026
	public static emojiUnicode = (emoji: string) => {
		let comp
		if (emoji.length === 1) {
			comp = emoji.charCodeAt(0)
		}
		comp = (
			(emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
		)
		if (comp < 0) {
			comp = emoji.charCodeAt(0)
		}
		return comp.toString(16)
	}
}
