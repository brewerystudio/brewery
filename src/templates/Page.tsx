import { Component, ReactNode } from 'react'
import { DeviceUtil } from '../utils'

export class Page<T = {}> extends Component<T> {

    constructor(props:any) {
        super(props)
        const tempRender = this.render
        this.render = this.renderResponsive
        this.renderAll = tempRender
        DeviceUtil.onResize(() => {
            const isDesktop = DeviceUtil.isM()
            if (this.state.isDesktop !== isDesktop) {
                this.setState({ isDesktop })
            }
        })
    }

    public state = {
        isDesktop: null
    } as any

    public renderDesktop(): ReactNode {
        return null
    }

    public renderMobile(): ReactNode {
        return null
    }

    private renderResponsive(): ReactNode {
        if (DeviceUtil.isM() && this.renderDesktop && this.renderDesktop()) {
            return this.renderDesktop()
        } else if (this.renderMobile && this.renderMobile()) {
            return this.renderMobile()
        } else {
            return this.renderAll()
        }
    }

    private renderAll(): ReactNode {
        return null
    }

}