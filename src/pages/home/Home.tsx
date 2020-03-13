import React from 'react'
import { Page } from '../Page'

export class Home extends Page {

    public renderDesktop = () => {
        return (
            <div>
                <div>
                    Welcome Home
                </div>
                <div>
                    New York | Los Angeles
                </div>
            </div>
        )
    }

    public renderMobile = () => {
        return <div>
            Mobile
        </div>
    }

}