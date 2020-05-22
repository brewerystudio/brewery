import React, { Component } from 'react'
import * as t from 'prop-types'
import '../Engineers.sass'
import { colors, addClasses, removeClasses } from '../../../constants'
import { Engineer, ScreenSize } from '../../../interfaces'
import { Button, IconName } from '../../../components'
import { Navigation } from '../../../utils'

export class EngineerThumbnail extends Component {

    private container!:HTMLDivElement

    public state = {
        /** Was the thumbnail opened into view mode? */
        isOpen: false,
    }

    public componentDidUpdate = () => {
        const isOpen:boolean = this.state.isOpen
        const FULLSCREEN_CLASS = 'engineer-thumbnail-fullscreen'
        if (isOpen) {
            this.fullScreen()
            // this.container.className = addClasses(this.container.className, FULLSCREEN_CLASS)
        } else {
            // this.container.className = removeClasses(this.container.className, FULLSCREEN_CLASS)
        }
    }

    public render = () => {
        const screenSize:ScreenSize = (this.props as any).screenSize
        const engineer:Engineer = (this.props as any).engineer

        const isOpen:boolean = this.state.isOpen

        return (
            <div ref={r => this.container = r!} onClick={!isOpen ? this.open : undefined} onMouseOver={this.onHoverThumbnail} onMouseOut={this.onOutThumbnail} className={'engineer-thumbnail position-relative d-flex flex-column justify-content-end animated-slow'}>
                {
                    isOpen ?
                    <div className={'d-flex flex-column justify-content-center text-left p-4 pt-4 mt-4 h-100 w-65'}>
                        <div className={'d-inline-block mt-4 mb-2'}>
                            <Button
                                iconName={IconName.Close}
                                iconColor={colors.light}
                                onClick={this.close}
                                iconSize={'1.4rem'}
                            />
                        </div>
                        <div className={'font-title color-white mt-4 h1 upper mb-0 lh-1'}>{engineer.name}</div>
                        <div className={'font-light color-light h6 mb-4 upper mt-0'}>{engineer.title}</div>
                        <div className={'font-secondary color-light h4 mt-1 mb-1 upper'}>CLIENTS</div>
                        <div className={'font-regular color-white mb-3'}>{engineer.clients.join(', ')}</div>
                        <div className={'font-secondary color-light h4 mb-1 upper'}>BIO</div>
                        <div className={'font-regular color-white'}>{engineer.bio}</div>
                        <div className={'d-inline-block mb-4 mt-4'}>
                            {
                                engineer.instagramURL &&
                                <Button
                                    className={'font-secondary ml-1 mr-1'}
                                    iconName={IconName.Instagram}
                                    iconColor={colors.white}
                                    textColor={colors.white}
                                    onClick={this.onInstagram}
                                    fontSize={'2rem'}
                                    iconSize={'2rem'}
                                />
                            }
                            {
                                engineer.twitterURL && 
                                <Button
                                    className={'font-secondary ml-1 mr-1'}
                                    iconName={IconName.Facebook}
                                    iconColor={colors.white}
                                    textColor={colors.white}
                                    onClick={this.onFacebook}
                                    fontSize={'2rem'}
                                    iconSize={'2rem'}
                                />
                            }
                            {
                                engineer.facebookURL &&
                                <Button
                                    className={'font-secondary ml-1 mr-1'}
                                    iconName={IconName.Twitter}
                                    iconColor={colors.white}
                                    textColor={colors.white}
                                    onClick={this.onTwitter}
                                    fontSize={'2rem'}
                                    iconSize={'2rem'}
                                />
                            }
                            {
                                engineer.soundCloudURL &&
                                <Button
                                    className={'font-secondary ml-1 mr-1'}
                                    iconName={IconName.SoundCloud}
                                    textColor={colors.white}
                                    onClick={this.onSoundCloud}
                                    fontSize={'2rem'}
                                    iconSize={'2rem'}
                                />
                            }
                        </div>
                    </div>
                    :
                    <div>
                        <div className={'font-title h7 color-white w-100 text-left ml-2 upper unselectable'}>{engineer.name}</div>
                        <div className={'font-light h8 color-light w-100 text-left ml-2 mb-2 upper unselectable'}>{engineer.title}</div>
                    </div>
                }
                <img className={'engineer-thumbnail-image'} src={engineer.photoURL} alt={engineer.name} style={{
                    opacity: isOpen ? '1' : '0.9'
                }} />
            </div>
        )
    }

    private onInstagram = () => {
        const engineer:Engineer = (this.props as any).engineer
        Navigation.go(engineer.instagramURL!, true)
    }

    private onFacebook = () => {
        const engineer:Engineer = (this.props as any).engineer
        Navigation.go(engineer.facebookURL!, true)
    }

    private onTwitter = () => {
        const engineer:Engineer = (this.props as any).engineer
        Navigation.go(engineer.twitterURL!, true)
    }

    private onSoundCloud = () => {
        const engineer:Engineer = (this.props as any).engineer
        Navigation.go(engineer.soundCloudURL!, true)
    }

    private open = () => {
        this.setState({ isOpen: true })
    }

    private close = () => {
        this.setState({ isOpen: false })
    }

    private fullScreen = () => {
        const box = $(this.container)
    
        // Get its position
        const pos = $(box).position()
        const height = $(box).height
        const width = $(box).width
    
        // Set the position of our box (not holder)
        // Give it absolute position (eg. outside our set structure)
        $(box).css({
            "position": 'absolute',
            "left": `${pos.left}px`,
            "top": `${pos.top}px`,
            'height': `${height}px`,
            'width': `${width}px`,
            'z-index': '2',
        })
    
        // Animate the position
        $(box).animate({
            'top': 0,
            'left': 0,
            'width': `${window.innerWidth}px`,
            'height': `${window.innerHeight}px`,
        }, 500)
    }

    private onHoverThumbnail = (e:any) => {
        const isOpen:boolean = this.state.isOpen
        if (!isOpen) {
            $('.engineer-thumbnail').each(function () {  this.style.opacity = '0.6' })
            e.currentTarget.style.opacity = '1'
        }
    }
    
    private onOutThumbnail = () => {
        const isOpen:boolean = this.state.isOpen
        if (!isOpen) { 
            $('.engineer-thumbnail').each(function () {  this.style.opacity = '1' })
        }
    }

    static propTypes = {
        screenSize: t.oneOf([ScreenSize.Desktop, ScreenSize.Mobile]),
        engineer: t.any.isRequired,
    }

    static defaultProps = {
        screenSize: ScreenSize.Desktop,
    }
    
}