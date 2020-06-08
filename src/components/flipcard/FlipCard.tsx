import React, { Component } from 'react'
import * as t from 'prop-types'
import './FlipCard.sass'

import { addClasses } from '../../constants'

// Denotes the side the user can click on to flip it automatically
type FlipSide = 'both' | 'front' | 'back' | 'none' | null | undefined

export class FlipCard extends Component {

    public container!:HTMLDivElement
    public front!:HTMLDivElement
    public back!:HTMLDivElement
    private isFlipped:boolean = false

    public componentDidMount = () => {
        const { flipOnClick } = this.props as any
        $(this.back).css('opacity', '0')
        $(this.container).click(() => this.flipOnClick())
        if (flipOnClick) {
            $(this.container).css('cursor', flipOnClick && flipOnClick !== 'back' ? 'pointer' : 'default')
        }
    }

    public render = () => {
        const { containerStyle, className, childrenFront, childrenBack } = this.props as any

        return (
            <div ref={r => this.container = r!} className={addClasses('flip-card animated-slow', className)} style={containerStyle}>
                <div className={'flip-card-inner'}>
                    <div ref={r => this.front = r!} className={'flip-card-front'}>{childrenFront}</div>
                    <div ref={r => this.back = r!} className={'flip-card-back'}>{childrenBack}</div>
                </div>
            </div>
        )
    }

    private flipOnClick = () => {
        const flipOnClick:FlipSide = (this.props as any).flipOnClick
        if ((!this.isFlipped && (flipOnClick === 'both' || flipOnClick === 'front')) || (this.isFlipped && (flipOnClick === 'both' || flipOnClick === 'back'))) {
            this.flip()
        }
    }

    public flip = (toBack:boolean|undefined = undefined) => {
        const flipOnClick:FlipSide = (this.props as any).flipOnClick

        if (!this.isFlipped && (toBack === true || toBack === undefined)) {
            // Flip to back
            $(this.container).css('transform', 'rotateY(180deg)')
            $(this.container).css('cursor', flipOnClick && flipOnClick !== 'front' && flipOnClick !== 'none' ? 'pointer' : 'default')
            $(this.back).show()
            $(this.front).animate({ opacity: 0 }, 100)
            $(this.back).animate({ opacity: 1 }, 100)
            setTimeout(() => $(this.front).hide(), 100)
            this.isFlipped = true
        } else if (this.isFlipped && (toBack === false || toBack === undefined)) {
            // Flip to front
            $(this.container).css('transform', 'rotateY(0deg)')
            $(this.container).css('cursor', flipOnClick && flipOnClick !== 'back' && flipOnClick !== 'none' ? 'pointer' : 'default')
            $(this.front).show()
            $(this.front).animate({ opacity: 1 }, 100)
            $(this.back).animate({ opacity: 0 }, 100)
            setTimeout(() => $(this.back).hide(), 100)
            this.isFlipped = false
        }
    }

    public static propTypes = {
        containerStyle: t.oneOfType([ t.string, t.object, t.number ]),
        className: t.string,
        width: t.oneOfType([ t.string, t.number ]),
        height: t.oneOfType([ t.string, t.number ]),
        flipOnClick: t.oneOf([ 'both', 'front', 'back', 'none' ]),
        childrenFront: t.any,
        childrenBack: t.any,
        animationMillis: t.number,
    }

    public static defaultProps = {
        containerStyle: {},
        className: '',
        flipOnClick: 'both',
    }

}