import { Studio } from "./Studio"

export interface StudioGear {
    studio: Studio
    rooms: StudioGearRoom[]
}

export interface StudioGearRoom {
    name: string
    sections: StudioGearSection[]
}

export interface StudioGearSection {
    name: string
    gear: string[]
}
