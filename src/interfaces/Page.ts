import { NavigationItem } from './NavigationItem'
import { ReactNode } from 'react'

export interface Page extends NavigationItem {

    component: ReactNode

}