import React, { Component } from 'react'
import * as t from 'prop-types'
import { colors } from '../../constants'
import { ReactSVG } from 'react-svg'

export class Icon extends Component {

    public static propTypes = {
        name: t.string.isRequired,
        fill: t.string,
        width: t.oneOfType([ t.string, t.number ]),
        height: t.oneOfType([ t.string, t.number ]),
        className: t.string,
        viewBox: t.string,
    }

    public static defaultProps = {
        fill: colors.lightest,
        width: 40,
        height: 40,
    }

    public render() {
        const { name, fill, width, height, className, viewBox } = this.props as any
        return (
            <ReactSVG
                src={`assets/${name}`}
                afterInjection={(error, svg) => {
                    if (error) {
                        console.error(error)
                        return
                    }
                    console.log(svg)
                }}
                beforeInjection={svg => {
                    svg.classList.add(className)
                    svg.setAttribute('fill', fill)
                    width && svg.setAttribute('width', width)
                    height && svg.setAttribute('height', height)
                    viewBox && svg.setAttribute('viewBox', viewBox)
                }}
                evalScripts="always"
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
                renumerateIRIElements={false}
                wrapper="span"
                className="wrapper-class-name"
                onClick={() => {
                    console.log('wrapper onClick')
                }}
            />
        )
    }



}