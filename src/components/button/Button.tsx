import React, { Component } from 'react'
import * as t from 'prop-types'
import { colors } from '../../constants'
import { Icon } from '../icon'
import { DeviceUtil, Styles } from '../../utils'
import './Button.sass'

enum ButtonState {
    normal,
    hovered,
    pressed,
}

const DISABLED_OPACITY = 0.6

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
        containerClassName: t.string,
        disabled: t.bool,
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
        containerClassName: '',
        disabled: false,
    }

    constructor(props:any) {
        super(props)
        this.buttonState = ButtonState.normal
        this.state = { opacity: 1, magnify: 1 }
    }

    public render() {
        const { text, borderRadius, borderWidth, iconName, fontSize, iconSize, containerClassName, className, children, textColor, borderColor, backgroundColor, iconColor, disabled } = (this.props) as any
        const { opacity, magnify } = (this.state) as any
        return (
            <span
                className={Styles.classNames('d-inline-block', containerClassName)}
                style={{ opacity: disabled ? DISABLED_OPACITY : opacity, cursor: disabled ? 'default' : 'pointer' }}
            >
                <div
                    onMouseDown={!disabled ? this.onMouseDown : undefined}
                    onMouseUp={this.onMouseUp}
                    onMouseEnter={!disabled ? this.onHover : undefined}
                    onMouseLeave={this.onHoverOut}
                    className={Styles.classNames('d-flex align-items-center justify-content-start button-wrapper animated', className)}
                    style={{ borderRadius, borderColor, backgroundColor, borderWidth, opacity, transform: `scale(${magnify})` }}
                >
                    {
                        iconName &&
                        <div className={'unselectable'} style={{ marginRight: `${parseInt(fontSize) / 2}rem` }}>
                            <Icon name={iconName} width={iconSize} height={iconSize} fill={iconColor} />
                        </div>
                    }
                    {
                        (text || children) &&
                        <div className={'unselectable'} style={{ color: textColor, fontSize }}>
                            {text}
                            {children}
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
        if (DeviceUtil.isM()) { 
            this.setState({ opacity: activeOpacity })
        }
        const onClick = (this.props as any).onClick
        onClick()
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

}