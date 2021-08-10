import React, { Component } from 'react'
import '../Engineers.sass'
import { colors } from '../../../constants'
import { Engineer } from '../../../interfaces'
import { Button, IconName, Image } from '../../../components'
import { Navigation, Keyboard, KeyboardKey } from '../../../utils'

interface EngineerThumbnailProps {
    engineer: Engineer
}

export class EngineerThumbnail extends Component<EngineerThumbnailProps> {

    private container!:HTMLDivElement
    private content!:HTMLDivElement

    private animationSpeed = 250 // milliseconds

    public state = {
        /** Was the thumbnail opened into view mode? */
        isOpen: false,
        isTransitioning: false,
        thumbnailUid: '',
        boundingBox: undefined as DOMRect | undefined,
    }

    public componentDidMount = () => {
        const key = this.props.engineer.name + this.props.engineer.studios.join(',')
        Keyboard.watch(key, KeyboardKey.Escape, this.close)
    }

    public componentWillUnmount = () => {
        const key = this.props.engineer.name + this.props.engineer.studios.join(',')
        Keyboard.unwatch(key)
    }

    public render = () => {
        const { engineer } = this.props

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
                <Image className={'engineer-thumbnail-image p-0 m-0'} src={engineer.photoURL} alt={engineer.name} style={{
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
        if (!this.state.isTransitioning && !this.state.isOpen) {
            this.toFullScreen()
        }
    }

    private close = () => {
        if (!this.state.isTransitioning && this.state.isOpen) {
            this.toThumbnail()
        }
    }

    private toFullScreen = () => {
        const boundingBox = this.container.getBoundingClientRect()
        this.setState({
            boundingBox,
            isTransitioning: true,
            isOpen: true,
        })
        setTimeout(() => {
            this.setState({ isTransitioning: false })
        }, this.animationSpeed * 1.5)

        // Create a decoy
        const decoyParent = $(this.container).parent().clone()
        decoyParent.insertAfter($(this.container).parent())
        decoyParent.addClass('decoy')
        decoyParent.click(false)
        
        $(this.container).parent().css({
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            'z-index': '2',
        })

        $(this.container).css({
            position: 'absolute',
            left: `${boundingBox.left}px`,
            top: `${boundingBox.top}px`,
            height: `${boundingBox.height}px`,
            width: `${boundingBox.width}px`,
            opacity: 0,
        })

        // Insert the decoy in the parent's place
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
        if (!this.state.boundingBox) {
            return
        }
        this.setState({ isTransitioning: true, isOpen: false })
        setTimeout(() => {
            this.setState({ isTransitioning: false })
        }, this.animationSpeed * 1.5)

        $(this.container).animate({
            left: `${this.state.boundingBox.left}px`,
            top: `${this.state.boundingBox.top}px`,
            height: `${this.state.boundingBox.height}px`,
            width: `${this.state.boundingBox.width}px`,
        }, this.animationSpeed)
        setTimeout(() => {
            $('.decoy').remove()
            $('.decoy').animate({
                opacity: '0',
            }, this.animationSpeed)
            $(this.container).parent().removeAttr('style')
            $(this.container).css({
                position: 'relative',
                top: '0',
                left: '0',
                height: 'auto',
                'aspect-ratio': '1.5',
                width: '18vw',
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
    
}