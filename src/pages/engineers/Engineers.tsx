import React from 'react'
import { Page } from '../Page'
import './Engineers.sass'
import { Button } from '../../components'
import { colors, Studio } from '../../constants'
import { Engineer } from '../../interfaces'

export class Engineers extends Page {

    public state = {
        studio: Studio.NewYork,
    }

    private engineers:Engineer[] = [
        {
            name: 'Andrew Krivonos',
            title: 'Head Engineer/Owner',
            clients: [
                'Jhene Aiko',
                'Joey Badass',
                'Raekwon',
                'Odd Future',
                'Chance the Rapper',
                'ILoveMakonnen',
                'Tory Lanes',
                'Santigold',
                'Mick Jenkins',
                'Method Man',
            ],
            photoURL: 'assets/engineers/andrew.jpg',
            bio: 'Head Engineer Andrew Krivonos is amongst the top recording and mixing engineers in New York with 12 years experience and thousands of artists under his belt. In 2015, Krivonos earned a Platinum award for recording on the single “Post to Be” and charted #4 on Billboard with mixing for Joey Bada$$’s album B4DA$$ . His sound - big and open, clean yet punchy - is sought out by the biggest names in music.',
            soundCloudURL: 'https://soundcloud.com/andrewkrivonos',
        }
    ]

    constructor(props:any) {
        super(props)
        this.engineers = new Array(13).fill(this.engineers[0])
    }

    componentDidMount = () => {
        
    }

    public renderDesktop = () => {
        const studio = this.state.studio

        const engineerDimensions = (e:any) => e.currentTarget.style.height = `${e.currentTarget.clientWidth * 0.6}px`

        return (
            <div className={'wrapper h-75 d-flex flex-column justify-content-between pl-4 pr-4 mt-4 mb-4'}>
                <div>
                    <div className={'color-primary font-secondary upper h4 mb-0'}>
                        ENGINEERS
                    </div>
                    <div className={'row mt-2 mb-4'}>
                        <div className={'col-6 d-flex justify-content-end'}>
                            <Button
                                className={'font-title ml-1 mr-1'}
                                textColor={studio === Studio.NewYork ? colors.white : colors.medium}
                                onClick={() => this.onChangeStudio(Studio.NewYork)}
                                fontSize={'2rem'}
                                iconSize={'2rem'}
                                text={'NEW YORK'}
                            />
                        </div>
                        <div className={'col-6 d-flex studio-name-border-left'}>
                            <Button
                                className={'font-title ml-1 mr-1'}
                                textColor={studio === Studio.LosAngeles ? colors.white : colors.medium}
                                onClick={() => this.onChangeStudio(Studio.LosAngeles)}
                                fontSize={'2rem'}
                                iconSize={'2rem'}
                                text={'LOS ANGELES'}
                            />
                        </div>
                    </div>
                    <div className={'d-flex flex-row justify-content-center'}>
                        {this.engineers.slice(0, 4).map((engineer, i) =>
                            <div onLoad={engineerDimensions} className={'w-25 ml-2 mr-2 mb-2'}>
                                <EngineerThumbnail key={`eng-1-${i}`} engineer={engineer} />
                            </div>
                        )}
                    </div>
                    <div className={'d-flex flex-row justify-content-center'}>
                        {this.engineers.slice(4, 8).map((engineer, i) =>
                            <div onLoad={engineerDimensions} className={'w-25 ml-2 mr-2 mt-2 mb-2'}>
                                <EngineerThumbnail key={`eng-1-${i}`} engineer={engineer} />
                            </div>
                        )}
                    </div>
                    <div className={'d-flex flex-row justify-content-center'}>
                        {this.engineers.slice(8).map((engineer, i) =>
                            <div onLoad={engineerDimensions} className={'w-20 ml-2 mr-2 mt-2'}>
                                <EngineerThumbnail key={`eng-1-${i}`} engineer={engineer} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    public renderMobile = () => {
        return (
            <div className={'wrapper h-75 d-flex flex-column justify-content-between pl-4 pr-4 mt-4 mb-4'}>
                
            </div>
        )
    }

    private onChangeStudio = (studio:Studio) => {
        this.setState({ studio })
    }

    

}

const onHoverThumbnail = (e:any) => {
    $('.engineer-thumbnail').each(function () {  this.style.opacity = '0.6' })
    e.currentTarget.style.opacity = '1'
}

const onOutThumbnail = () => {
    $('.engineer-thumbnail').each(function () {  this.style.opacity = '1' })
}

const onShowProfile = (e:any) => {
    e.currentTarget.className += ' engineer-thumbnail-fullscreen'
}

const EngineerThumbnail = ({ engineer }:any) => (
    <div onClick={onShowProfile} onMouseOver={onHoverThumbnail} onMouseOut={onOutThumbnail} className={'engineer-thumbnail position-relative d-flex flex-column justify-content-end clickable animated-slow'}>
        <div className={'font-title h7 color-white w-100 text-left ml-2 upper unselectable'}>{engineer.name}</div>
        <div className={'font-light h8 color-light w-100 text-left ml-2 mb-2 upper unselectable'}>{engineer.title}</div>
        <img className={'engineer-thumbnail-image'} src={engineer.photoURL} alt={engineer.name} />
    </div>
)