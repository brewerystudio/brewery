import React from 'react'
import { Page } from '../Page'
import './Engineers.sass'

import { Button } from '../../components'
import { colors } from '../../constants'
import { Studio, Engineer } from '../../interfaces'

import { EngineerThumbnail, EngineerSlide } from './components'

interface EngineersProps {
    engineers: Engineer[]
}

export class Engineers extends Page<EngineersProps> {
    
    // Number of columns for engineer thumbnails
    private static NUM_COLS_DESKTOP = 5

    public state = {
        studio: 'NewYork' as Studio,
    }

    private engineers: Engineer[] = [
        {
            name: 'Andrew Krivonos',
            title: 'Head Engineer/Owner',
            studios: ['NewYork', 'LosAngeles'],
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
            bio: 'Head Engineer Andrew Krivonos is amongst the top recording and mixing engineers in New York with 12 years experience and thousands of artists under his belt. In 2015, Krivonos earned a Platinum award for recording on the single “Post to Be” and charted #4 on Billboard with mixing for Joey Bada$$’s album B4DA$$. His sound - big and open, clean yet punchy - is sought out by the biggest names in music.',
            soundCloudURL: 'https://soundcloud.com/andrewkrivonos',
        }, {
            name: 'Bob Jenkins',
            title: 'Head Engineer/Owner',
            studios: ['NewYork'],
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
            bio: 'Head Engineer Andrew Krivonos is amongst the top recording and mixing engineers in New York with 12 years experience and thousands of artists under his belt. In 2015, Krivonos earned a Platinum award for recording on the single “Post to Be” and charted #4 on Billboard with mixing for Joey Bada$$’s album B4DA$$. His sound - big and open, clean yet punchy - is sought out by the biggest names in music.',
            soundCloudURL: 'https://soundcloud.com/andrewkrivonos',
        }, {
            name: 'Joe Jonas',
            title: 'Head Engineer/Owner',
            studios: ['LosAngeles'],
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
            bio: 'Head Engineer Andrew Krivonos is amongst the top recording and mixing engineers in New York with 12 years experience and thousands of artists under his belt. In 2015, Krivonos earned a Platinum award for recording on the single “Post to Be” and charted #4 on Billboard with mixing for Joey Bada$$’s album B4DA$$. His sound - big and open, clean yet punchy - is sought out by the biggest names in music.',
            soundCloudURL: 'https://soundcloud.com/andrewkrivonos',
        }, {
            name: 'Wuuuut',
            title: 'Head Engineer/Owner',
            studios: ['NewYork'],
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
            bio: 'Head Engineer Andrew Krivonos is amongst the top recording and mixing engineers in New York with 12 years experience and thousands of artists under his belt. In 2015, Krivonos earned a Platinum award for recording on the single “Post to Be” and charted #4 on Billboard with mixing for Joey Bada$$’s album B4DA$$. His sound - big and open, clean yet punchy - is sought out by the biggest names in music.',
            soundCloudURL: 'https://soundcloud.com/andrewkrivonos',
        },
    ]

    public renderDesktop = () => {
        const studio = this.state.studio

        return (
            <div className={'wrapper h-100 d-flex flex-column justify-content-center mt-4 mb-4'}>
                <div>
                    <div className={'color-primary font-secondary upper h4 mb-0'}>
                        ENGINEERS
                    </div>
                    <div className={'row mt-2 mb-4 mr-4 ml-4'}>
                        <div className={'col-6 d-flex justify-content-end'}>
                            <Button
                                className={'font-title ml-1 mr-1'}
                                textColor={studio === 'NewYork' ? colors.white : colors.medium}
                                onClick={() => this.onChangeStudio('NewYork')}
                                fontSize={'2rem'}
                                iconSize={'2rem'}
                                text={'NEW YORK'}
                            />
                        </div>
                        <div className={'col-6 d-flex studio-name-border-left'}>
                            <Button
                                className={'font-title ml-1 mr-1'}
                                textColor={studio === 'LosAngeles' ? colors.white : colors.medium}
                                onClick={() => this.onChangeStudio('LosAngeles')}
                                fontSize={'2rem'}
                                iconSize={'2rem'}
                                text={'LOS ANGELES'}
                            />
                        </div>
                    </div>
                    <div className={'d-flex flex-column align-items-center'}>
                        <div className={'d-flex flex-row justify-content-center pl-2 flex-wrap w-75'}>
                            {this.engineers.map((engineer, i) => (
                                !engineer.studios.includes(studio) ? null : 
                                <div key={`es-${engineer.name}-${i}`} className={'mr-2'}>
                                    <EngineerThumbnail engineer={engineer} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    public renderMobile = () => {
        const studio = this.state.studio
        return (
            <div className={'wrapper d-flex flex-column justify-content-between'}>
                <div id="eng-carousel" className={'carousel slide engineer-carousel animated-slow'} data-ride="eng-carousel">
                    <div className={"carousel-inner h-100"}>
                        {this.engineers.map((engineer, i) => (
                            !engineer.studios.includes(studio) ? null : 
                            <div key={`es-${engineer.name}-${i}`} className={`h-100 carousel-item ${i === 0 ? 'active' : ''}`}>
                                <EngineerSlide engineer={engineer} studio={studio} onChangeStudio={this.onChangeStudio} />
                            </div>
                        ))}
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
        if (this.state.studio !== studio) {
            this.setState({ studio });
            ($('.carousel') as any).carousel(0)
        }
    }

}
