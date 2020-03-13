import React, { Component } from 'react'
import * as t from 'prop-types'
import { BackgroundName } from './BackgroundName'
import './Background.sass'
import { colors } from '../../constants/colors';

export class Background extends Component {

    public static propTypes = {
        backgroundColor: t.string,
        backgroundName: t.any.isRequired,
        position: t.oneOf([ 'fixed', 'absolute' ]),
    }

    public static defaultProps = {
        backgroundColor: colors.black,
        position: 'absolute',
    }

    public render() {
        const backgroundColor:string = (this.props as any).backgroundColor
        const backgroundName:BackgroundName = (this.props as any).backgroundName
        console.log(backgroundName)
        const position:"fixed" | "absolute" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-webkit-sticky" | "relative" | "static" | "sticky" | undefined = (this.props as any).position
        return <div className={'bg'} style={{ position, background: `${backgroundColor} url(assets/${backgroundName})` }}></div>
    }

}