import React from 'react'
import { Page } from '../Page'
import { Button, IconName } from '../../components'
import { colors } from '../../constants'
import './Home.sass'

export class Home extends Page {

    constructor(props:any) {
        super(props)
    }

    public renderDesktop = () => {
        return (
            <div className={'wrapper'}>
                <div>
                    <div className={'color-white font-title upper display-3'}>
                        Welcome Home
                    </div>
                    <div className={'color-primary font-secondary upper h2'}>
                        New York | Los Angeles
                    </div>
                    <div className={'d-inline-block mb-4'}>
                        <Button
                            className={'font-secondary book-session-button'}
                            text={'Book Session'.toUpperCase()}
                            iconName={IconName.Record}
                            iconColor={colors.white}
                            textColor={colors.white}
                            onClick={this.onBookSession}
                            fontSize={'1.4rem'}
                            iconSize={'1.8rem'}
                        />
                    </div>
                </div>
                <footer className={'footer'} ref={r => this.constrainFooter(r)} style={{ height: this.state.footerHeight || 'auto' }}>
                    <div className={'container pl-4 pr-4'}>
                        <div className={'d-inline-block mb-4 mt-4'}>
                            <Button
                                className={'font-secondary ml-1 mr-1'}
                                iconName={IconName.Instagram}
                                iconColor={colors.white}
                                textColor={colors.white}
                                onClick={this.onInstagram}
                                fontSize={'3rem'}
                                iconSize={'3rem'}
                            />
                            <Button
                                className={'font-secondary ml-1 mr-1'}
                                iconName={IconName.Facebook}
                                iconColor={colors.white}
                                textColor={colors.white}
                                onClick={this.onFacebook}
                                fontSize={'3rem'}
                                iconSize={'3rem'}
                            />
                            <Button
                                className={'font-secondary ml-1 mr-1'}
                                iconName={IconName.Twitter}
                                iconColor={colors.white}
                                textColor={colors.white}
                                onClick={this.onTwitter}
                                fontSize={'3rem'}
                                iconSize={'3rem'}
                            />
                        </div>
                        <div className={'color-primary h4 mt-4'}>
                            BOUTIQUE MUSIC RECORDING STUDIOS IN BROOKLYN & DTLA
                        </div>
                        <div className={'color-white font-title h2 small mt-4'}>
                            America’s only bi-coastal studios with 5 modern recording rooms staffed by NYC and LA’s Platinum selling & Grammy winning engineers & producers, all to deliver the very best service and top amenities for today’s signed artists and independent musicians.
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

    public renderMobile = () => {
        return (
            <div>
                <div className={'color-white font-title upper h1 display-4'}>
                    Welcome Home
                </div>
                <div className={'color-primary font-secondary upper h4'}>
                    New York | Los Angeles
                </div>
                <div className={'d-inline-block mt-4'}>
                    <Button
                        className={'font-secondary mt-4'}
                        text={'Book Session'.toUpperCase()}
                        iconName={IconName.Record}
                        iconColor={colors.white}
                        textColor={colors.white}
                        onClick={this.onBookSession}
                        fontSize={'1.7rem'}
                        iconSize={'2.2rem'}
                    />
                </div>
            </div>
        )
    }

    private constrainFooter = (element:any) => {
        if (!this.state.footerHeight) {
            const rect = element.getBoundingClientRect()
            this.setState({ footerHeight: `${rect.height + 50}px` })
        }
    }

    private onBookSession = () => {

    }

    private onInstagram = () => {

    }

    private onFacebook = () => {

    }

    private onTwitter = () => {

    }

}