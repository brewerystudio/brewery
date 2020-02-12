import React from 'react'
import { Page } from '../Page'

export class Home extends Page {

    public renderDesktop = () => {
        return <div>
            Desktop
        </div>
    }

    public renderMobile = () => {
        return <div>
            Mobile
        </div>
    }

}