
export interface BookingPriceTable {
    withEngineerPrices: BookingPriceTableRow
    withProducerPrices: BookingPriceTableRow
    withAssistantPrices: BookingPriceTableRow
    specials: BookingPriceTableSpecial[]
}

export interface BookingPriceTableRow {
    hourlyUSD?: number
    halfDayUSD?: number
    fullDayUSD?: number
}

export interface BookingPriceTableSpecial {
    name: string
    schedule: string
    caption: string
    hourlyUSD?: number
    halfDayUSD?: number
    fullDayUSD?: number
}
