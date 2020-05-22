import React from 'react'
import { Page } from '../Page'
import './Engineers.sass'
import { Button } from '../../components'
import { colors } from '../../constants'
import { Studio, Engineer } from '../../interfaces'

import { EngineerThumbnail, EngineerSlide } from './components'


export class Engineers extends Page {

    public state = {
        studio: Studio.NewYork,
    }

    private engineers:{ [studio:string]: Engineer[] } = {
        'NewYork': [
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
        ],
        'LosAngeles': [
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
    }

    public renderDesktop = () => {
        const studio = this.state.studio
        const engineers:Engineer[] = new Array(studio === Studio.NewYork ? 13 : 6).fill((this.engineers[this.state.studio.toString()]! as Engineer[])[0])

        const engineerDimensions = (e:any) => e.currentTarget.style.height = `${e.currentTarget.clientWidth * 0.6}px`

        return (
            <div className={'wrapper h-100 d-flex flex-column justify-content-center mt-4 mb-4'}>
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
                    <div className={'d-flex flex-row justify-content-center pl-2 flex-wrap'}>
                        {engineers.map((engineer, i) =>
                            <div key={`eng-${i}`} onLoad={engineerDimensions} className={'w-25 pr-2 pt-2'}>
                                <EngineerThumbnail engineer={engineer} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    public renderMobile = () => {
        const studio = this.state.studio
        const engineers:Engineer[] = new Array(studio === Studio.NewYork ? 13 : 6).fill((this.engineers[this.state.studio.toString()]! as Engineer[])[0])
        
        return (
            <div className={'wrapper d-flex flex-column justify-content-between'}>
                <div id="eng-carousel" className={'carousel slide engineer-carousel animated-slow'} data-ride="eng-carousel">
                <div className={"carousel-inner h-100"}>
                    {engineers.map((engineer, i) =>
                        <div key={`es-${i}`} className={`h-100 carousel-item ${i === 0 ? 'active' : ''}`}>
                            <EngineerSlide engineer={engineer} studio={studio} onChangeStudio={this.onChangeStudio} />
                        </div>
                    )}
                </div>
                <a className="carousel-control-next" href="#eng-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
        )
    }

    private onChangeStudio = (studio:Studio) => {
        this.setState({ studio })
    }

}
