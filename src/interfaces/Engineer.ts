import { Studio } from "./Studio";

export interface Engineer {
    name: string
    title: string
    clients: string[]
    studios: Studio[]
    bio: string
    photoURL: string
    instagramURL?: string
    twitterURL?: string
    facebookURL?: string
    soundCloudURL?: string
    websiteURL?: string
}