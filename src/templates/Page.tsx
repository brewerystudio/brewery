import React, { Component, ReactElement, ReactNode } from 'react'

export class Page<T = {}> extends Component<T> {

    public renderDesktop?: ()=>ReactElement | null
    public renderMobile?: ()=>ReactElement | null

    constructor(props: any) {
        super(props)
        this.render = this.renderResponsive
    }

    private renderResponsive(): ReactNode {
        return (
            <>
                {
                    this.renderDesktop &&
                    <div className={'d-none d-sm-flex flex-row align-items-center h-100 w-100'}>
                        {this.renderDesktop()}
                    </div>
                }
                {
                    this.renderMobile &&
                    <div className={'d-flex d-sm-none flex-row align-items-center h-100 w-100'}>
                        {this.renderMobile()}
                    </div>
                }
            </>
        )
    }
}
