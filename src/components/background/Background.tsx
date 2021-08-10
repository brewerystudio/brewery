import React, { Component } from 'react'
import * as t from 'prop-types'
import { BackgroundName } from './BackgroundName';
import { colors } from '../../constants'
import './Background.sass'
import { Image } from '../image'

export class Background extends Component {

    private bg!: any

    public static propTypes = {
        fade: t.bool,
        backgroundColor: t.string,
        overlayColor: t.string,
        overlayOpacity: t.number,
        initialBackgroundName: t.any.isRequired,
        position: t.oneOf([ 'fixed', 'absolute' ]),
    }

    public static defaultProps = {
        overlayColor: colors.clear,
        overlayOpacity: 0.2,
        backgroundColor: colors.black,
        position: 'absolute',
        fade: true,
    }

    public state = {
        backgroundName: null as BackgroundName|null
    }

    constructor(props:any) {
        super(props)
        const backgroundName:BackgroundName = props.initialBackgroundName
        this.state = { backgroundName }
    }

    public changeBackgroundName = (backgroundName:BackgroundName, fadeSpeed:number = 250) => {
        if (this.state.backgroundName === backgroundName) {
            return
        }
        const fade:boolean = (this.props as any).fade
        if (fade) {
            $(this.bg).animate({ opacity: 0 }, fadeSpeed)
        }
        setTimeout(() => {
            this.setState({ backgroundName }, () => {
                if (fade) {
                    $(this.bg).animate({ opacity: 1 }, fadeSpeed)
                }
            })
        }, fadeSpeed)
    }

    public render() {
        const backgroundColor:string = (this.props as any).backgroundColor
        const overlayColor:string = (this.props as any).overlayColor
        const overlayOpacity:string = (this.props as any).overlayOpacity
        const position:"fixed" | "absolute" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-webkit-sticky" | "relative" | "static" | "sticky" | undefined = (this.props as any).position
        const backgroundSrc = this.state.backgroundName ? `assets/${this.state.backgroundName}` : undefined
        return (
            <div>
                <Image ref={r => this.bg = r!} className={'bg'} style={{ position, backgroundColor }} src={backgroundSrc} />
                <div className={'overlay'} style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}></div>
            </div>
        )
    }

}