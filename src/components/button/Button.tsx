import React, { Component } from 'react'
import * as t from 'prop-types'
import { colors } from '../../constants'
import { Icon } from '../icon'
import './Button.sass'

enum ButtonState {
    normal,
    hovered,
    pressed,
}

export class Button extends Component {

    private buttonState!:ButtonState

    public static propTypes = {
        text: t.string,
        onClick: t.func.isRequired,
        borderWidth: t.oneOfType([ t.number, t.string ]),
        borderRadius: t.oneOfType([ t.number, t.string ]),
        borderColor: t.string,
        backgroundColor: t.string,
        iconName: t.string,
        iconColor: t.string,
        textColor: t.string,
        fontSize: t.oneOfType([ t.number, t.string ]),
        iconSize: t.oneOfType([ t.number, t.string ]),
        activeOpacity: t.number,
        activeMagnify: t.number,
        className: t.string,
    }

    public static defaultProps = {
        borderRadius: 0,
        borderWidth: 0,
        borderColor: colors.clear,
        backgroundColor: colors.clear,
        text: null,
        iconName: null,
        iconColor: colors.white,
        textColor: colors.white,
        fontSize: '1rem',
        iconSize: '1.6rem',
        activeOpacity: 0.8,
        activeMagnify: 1.1,
        className: '',
    }

    constructor(props:any) {
        super(props)
        this.buttonState = ButtonState.normal
        const { borderColor, backgroundColor, iconColor, textColor } = (this.props) as any
        this.state = { borderColor, backgroundColor, iconColor, textColor, opacity: 1, magnify: 1 }
    }

    public render() {
        const { text, borderRadius, borderWidth, iconName, fontSize, iconSize, className } = (this.props) as any
        const { borderColor, backgroundColor, iconColor, textColor, opacity, magnify } = (this.state) as any
        return (
            <span className={'d-inline-block'}>
                <div
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}
                    onMouseEnter={this.onHover}
                    onMouseLeave={this.onHoverOut}
                    onClick={this.onClick}
                    className={'d-flex align-items-center justify-content-start button-wrapper animated unselectable ' + className}
                    style={{ borderRadius, borderColor, backgroundColor, borderWidth, opacity, transform: `scale(${magnify})` }}
                >
                    {
                        iconName &&
                        <div style={{ marginRight: `${parseInt(fontSize) / 2}rem` }}>
                            <Icon name={iconName} width={iconSize} height={iconSize} fill={iconColor} />
                        </div>
                    }
                    {
                        text &&
                        <div className={''} style={{ color: textColor, fontSize }}>
                            {text}
                        </div>
                    }
                </div>
            </span>
        )
    }

    public getState = () => this.buttonState

    private onMouseDown = () => {
        this.buttonState = ButtonState.pressed
        const activeOpacity = (this.props as any).activeOpacity
        this.setState({ opacity: activeOpacity })
    }

    private onMouseUp = () => {
        this.buttonState = ButtonState.normal
        this.setState({ opacity: 1 })
    }

    private onHover = () => {
        this.buttonState = ButtonState.hovered
        const activeMagnify = (this.props as any).activeMagnify
        this.setState({ magnify: activeMagnify })
    }

    private onHoverOut = () => {
        this.buttonState = ButtonState.normal
        this.setState({ magnify: 1 })
    }

    private onClick = () => {
        this.buttonState = ButtonState.normal
        const onClick = (this.props as any).onClick
        onClick()
    }

}