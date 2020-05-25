import React from 'react'
import { Page } from '../Page'
import './Info.sass'
import { Icon, IconName } from '../../components'

export class Info extends Page {

    public renderDesktop = () => {

        const infoDimensions = (e:any) => e.currentTarget.style.height = `${e.currentTarget.clientWidth * 0.53}px`

        return (
            <div className={'wrapper h-75 d-flex flex-column justify-content-center pl-4 pr-4 mt-4 mb-4'}>
                <div className={'pl-4 pr-4'}>
                    <div className={'row'}>
                        <div className={'col-3 pl-1 pr-1'}>
                            <button className={'color-white btn-box animated w-100 font-tertiary'}>SERVICES</button>
                        </div>
                        <div className={'col-3 pl-1 pr-1'}>
                            <button className={'color-white btn-box animated w-100 font-tertiary'}>GEAR</button>
                        </div>
                        <div className={'col-3 pl-1 pr-1'}>
                            <button className={'color-white btn-box animated w-100 font-tertiary'}>FLOORPLAN</button>
                        </div>
                        <div className={'col-3 pl-1 pr-1'}>
                            <button className={'color-white btn-box animated w-100 font-tertiary'}>HISTORY</button>
                        </div>
                    </div>
                </div>
                <div className={'pl-4 pr-4'}>
                    <div className={'row pt-2'}>
                        <div className={'col-6 pl-1 pr-1'}>
                            <div onLoad={infoDimensions} className={'color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}>
                                <Icon name={IconName.Microphone} width={'2rem'} height={'4rem'} />
                                <div className={'font-title h6'}>RECORDING & EDITING</div>
                            </div>
                        </div>
                        <div className={'col-6 pl-1 pr-1'}>
                            <div onLoad={infoDimensions} className={'color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}>
                                <Icon name={IconName.Microphone} width={'2rem'} height={'4rem'} />
                                <div className={'font-title h6'}>MIXING & MASTERING</div>
                            </div>
                        </div>
                    </div>
                    <div className={'row pt-2'}>
                        <div className={'col-6 pl-1 pr-1'}>
                            <div onLoad={infoDimensions} className={'color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}>
                                <Icon name={IconName.Film} width={'2rem'} height={'4rem'} />
                                <div className={'font-title h6'}>VOICEOVER / POST / FILM</div>
                            </div>
                        </div>
                        <div className={'col-6 pl-1 pr-1'}>
                            <div onLoad={infoDimensions} className={'color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}>
                                <Icon name={IconName.Film} width={'2rem'} height={'4rem'} />
                                <div className={'font-title h6'}>PRODUCTION & COMPOSITION</div>
                            </div>
                        </div>
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

}