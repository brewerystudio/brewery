import React, { Component } from 'react'
import '../Engineers.sass'
import { colors } from '../../../constants'
import { Engineer, Studio } from '../../../interfaces'
import { Button, IconName, Image } from '../../../components'
import { Navigation } from '../../../utils'

interface EngineerSlideProps {
    engineer: Engineer
    studio: Studio
    onChangeStudio: (studio: Studio)=>void
}

export class EngineerSlide extends Component<EngineerSlideProps> {

    public render = () => {
        const { engineer, studio, onChangeStudio } = this.props

        return (
            <div className={'position-relative d-flex flex-column justify-content-end p-0 m-0 h-100 engineer-slide'}>
                <div className={'d-flex flex-column justify-content-center text-left pt-4 mt-4 pl-4 pr-4 h-100'}>
                    <div className={'d-flex flex-row mt-4 mb-2 w-100'}>
                        <div className={'pr-2'}>
                            <Button
                                className={'font-title'}
                                textColor={studio === 'NewYork' ? colors.white : colors.medium}
                                onClick={() => onChangeStudio('NewYork')}
                                fontSize={'1rem'}
                                text={'NEW YORK'}
                            />
                        </div>
                        <div className={'pl-2 pr-2 studio-name-border-left'}>
                            <Button
                                className={'font-title'}
                                textColor={studio === 'LosAngeles' ? colors.white : colors.medium}
                                onClick={() => onChangeStudio('LosAngeles')}
                                fontSize={'1rem'}
                                text={'LOS ANGELES'}
                            />
                        </div>
                    </div>
                    <div className={'font-title color-white mt-2 h3 upper mb-0 lh-1 w-75'}>{engineer.name}</div>
                    <div className={'font-light color-light h7 mb-4 upper mt-0 w-75'}>{engineer.title}</div>
                    <div className={'font-secondary color-light h4 mb-1 upper w-75'}>BIO</div>
                    <div className={'font-regular color-white w-75 h7 '}>{engineer.bio}</div>
                    <div className={'d-inline-block mb-4 mt-4 w-75'}>
                        {
                            engineer.instagramURL &&
                            <Button
                                className={'font-secondary ml-1 mr-1'}
                                iconName={IconName.Instagram}
                                iconColor={colors.white}
                                textColor={colors.white}
                                onClick={this.onInstagram}
                                iconSize={'2.4rem'}
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
                                iconSize={'2.4rem'}
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
                                iconSize={'2.4rem'}
                            />
                        }
                        {
                            engineer.soundCloudURL &&
                            <Button
                                className={'font-secondary ml-1 mr-1'}
                                iconName={IconName.SoundCloud}
                                textColor={colors.white}
                                onClick={this.onSoundCloud}
                                iconSize={'2.4rem'}
                            />
                        }
                    </div>
                </div>
                <Image className={'engineer-slide-image p-0 m-0'} src={engineer.photoURL} alt={engineer.name} />
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
}
