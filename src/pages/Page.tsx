import { Component, ReactNode } from 'react'
import { DeviceUtil } from '../utils/Device';

export class Page extends Component {

    constructor(props:any) {
        super(props)
        const tempRender = this.render
        this.render = this.renderResponsive
        this.renderAll = tempRender
        DeviceUtil.onResize(() => {
            const isDesktop = DeviceUtil.isM()
            if (this.state.isDesktop !== isDesktop) {
                console.log('change')
                this.setState({ isDesktop })
            }
        })
    }

    public state = {
        isDesktop: null
    } as any

    public renderDesktop():ReactNode {
        return null
    }

    public renderMobile():ReactNode {
        return null
    }

    private renderResponsive():ReactNode {
        if (this.renderDesktop() && DeviceUtil.isM()) {
            return this.renderDesktop()
        } else if (this.renderMobile()) {
            return this.renderMobile()
        } else {
            return this.renderAll()
        }
    }

    private renderAll():ReactNode {
        return null
    }

}