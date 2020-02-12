import { NavigationItem } from './NavigationItem'
import { ReactNode } from 'react'

export interface Route extends NavigationItem {

    component: ReactNode

}