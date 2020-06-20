import React, { Component } from 'react'
import * as t from 'prop-types'
import '../Engineers.sass'
import { colors } from '../../../constants'
import { Engineer } from '../../../interfaces'
import { Button, IconName } from '../../../components'
import { Navigation } from '../../../utils'

export class EngineerThumbnail extends Component {

    private container!:HTMLDivElement
    private content!:HTMLDivElement
    private boundingBox!:DOMRect

    private animationSpeed = 250 // milliseconds

    public state = {
        /** Was the thumbnail opened into view mode? */
        isOpen: false,
    }

    public componentDidUpdate = () => {
        const isOpen:boolean = this.state.isOpen
        if (isOpen) {
            this.toFullScreen()
        } else {
            this.toThumbnail()
        }
    }

    public render = () => {
        const engineer:Engineer = (this.props as any).engineer

        const isOpen:boolean = this.state.isOpen

        return (
            <div ref={r => this.container = r!} onClick={!isOpen ? this.open : undefined} onMouseOver={this.onHoverThumbnail} onMouseOut={this.onOutThumbnail} className={'engineer-thumbnail position-relative d-flex flex-column justify-content-end p-0 m-0'}
                style={ { cursor: isOpen ? 'default' : 'pointer' } }
            >
                {
                    isOpen ?
                    <div ref={r => this.content = r!} className={'d-flex flex-column justify-content-center text-left pt-4 mt-4 pl-4 pr-4 h-100 w-65'}>
                        <div className={'d-inline-block mt-4 mb-2'}>
                            <Button
                                iconName={IconName.Close}
                                iconColor={colors.light}
                                onClick={this.close}
                                iconSize={'1rem'}
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
                <img className={'engineer-thumbnail-image p-0 m-0'} src={engineer.photoURL} alt={engineer.name} style={{
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

    private toFullScreen = () => {
    
        // Get its position
        this.boundingBox = this.container.getBoundingClientRect()
    
        $(this.container).parent().css({
            padding: 0,
            margin: 0,
        })

        // Create a decoy
        const decoyParent = $(this.container).parent().clone()
        decoyParent.addClass('decoy')
        decoyParent.click(false)
        
        $(this.container).parent().css({
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            'z-index': '2',
        })

        $(this.container).css({
            position: 'absolute',
            left: `${this.boundingBox.left}px`,
            top: `${this.boundingBox.top}px`,
            height: `${this.boundingBox.height}px`,
            width: `${this.boundingBox.width}px`,
            opacity: 0,
        })
        // Insert the decoy in the parent's place
        decoyParent.insertAfter($(this.container).parent())
        $(this.container).animate({
            top: 0,
            left: 0,
            width: `100vw`,
            height: `100vh`,
            opacity: 1,
        }, this.animationSpeed)

        // Animate content
        if (this.content) {
            $(this.content).css('opacity', '0')
            setTimeout(() => {
                $(this.content).animate({ opacity: 1 }, this.animationSpeed)
            }, this.animationSpeed)
        }
    }

    private toThumbnail = () => {
        if (!this.boundingBox) {
            return
        }
        $(this.container).animate({
            left: `${this.boundingBox.left}px`,
            top: `${this.boundingBox.top}px`,
            height: `${this.boundingBox.height}px`,
            width: `${this.boundingBox.width}px`,
        }, this.animationSpeed)
        setTimeout(() => {
            $('.decoy').remove()
            $('.decoy').animate({
                width: '0px',
            }, this.animationSpeed)
            $(this.container).parent().css({
                position: 'relative',
                top: '0',
                left: '0',
                width: 'auto',
                height: 'auto',
                padding: 'auto',
                margin: 'auto',
                'z-index': '0',
            })
            $(this.container).css({
                position: 'relative',
                top: '0',
                left: '0',
                width: `${this.boundingBox.width}px`,
            })
        }, this.animationSpeed * 1.1)
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
        engineer: t.any.isRequired,
    }
    
}