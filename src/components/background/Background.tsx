import React, { Component } from 'react'
import * as t from 'prop-types'
import { BackgroundName } from './BackgroundName'
import { colors } from '../../constants'
import './Background.sass'

export class Background extends Component {

    public static propTypes = {
        backgroundColor: t.string,
        overlayColor: t.string,
        overlayOpacity: t.number,
        backgroundName: t.any.isRequired,
        position: t.oneOf([ 'fixed', 'absolute' ]),
    }

    public static defaultProps = {
        overlayColor: colors.clear,
        overlayOpacity: 0.2,
        backgroundColor: colors.black,
        position: 'absolute',
    }

    public render() {
        const backgroundColor:string = (this.props as any).backgroundColor
        const overlayColor:string = (this.props as any).overlayColor
        const overlayOpacity:string = (this.props as any).overlayOpacity
        const backgroundName:BackgroundName = (this.props as any).backgroundName
        const position:"fixed" | "absolute" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-webkit-sticky" | "relative" | "static" | "sticky" | undefined = (this.props as any).position
        return (
            <div>
                <div className={'bg'} style={{ position, background: `${backgroundColor} url(assets/${backgroundName})` }}></div>
                <div className={'overlay'} style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}></div>
            </div>
        )
    }

}