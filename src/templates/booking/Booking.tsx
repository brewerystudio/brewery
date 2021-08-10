import React from 'react'
import { Page } from '../Page'
import { Button } from '../../components'
import './Booking.sass'
import { colors } from '../../constants'
import { BookingPriceTable } from '../../interfaces'

interface BookingProps {
    priceTable: BookingPriceTable
}

export class Booking extends Page<BookingProps> {

    private pricing = {
        hourly: {
            title: 'Hourly',
            subtitle: 'Flat Rate',
            prices: {
                withEngineer: 105,
                withProducer: 160,
                withAssistant: 85,
            }
        },
        halfDay: {
            title: 'Half Day',
            subtitle: '(5 Hours)',
            prices: {
                withEngineer: 475,
                withProducer: 700,
                withAssistant: 400,
            }
        },
        fullDay: {
            title: 'Full Day',
            subtitle: '(10 Hours)',
            prices: {
                withEngineer: 850,
                withProducer: 1300,
                withAssistant: 700,
            }
        } ,
    }

    private specials = [
        {
            text: 'Early Bird Special',
            time: '7AM - 11AM Daily',
            price: '$290',
            subtext: 'w/ Engineer'
        },
        {
            text: 'Late Night Happy Hour',
            time: '12AM - 4AM Daily',
            price: '$350',
            subtext: 'w/ Engineer'
        },
        {
            text: '25 / 50 Hour Blocks',
            time: 'Artist Project Blocks',
            price: '$2150 / $3950',
            subtext: 'w/ Engineer'
        },
    ]

    componentDidMount = () => {
    }

    public renderDesktop = () => {
        return (
            <div className={'wrapper d-flex flex-column justify-content-between pl-4 pr-4 mt-4 mb-4'}>
                <div className={'d-flex flex-column justify-content-between p-4 mt-4 btn-box inactive'}>
                    <div className={'mb-4'}>
                        <div className={'color-white font-title upper display-5 mt-0'}>
                            BOOKING
                        </div>
                        <div className={'color-primary font-secondary upper h5 mb-0'}>
                            BOOK SESSIONS IN NYC OR LA
                        </div>
                    </div>
                    <div className={'row mt-2 pl-4 pr-4'}>
                        <div className={'col-3'}></div>
                        <div className={'col-3 h6 upper font-bold color-medium'}>w/ Engineer</div>
                        <div className={'col-3 h6 upper font-bold color-medium'}>w/ Producer</div>
                        <div className={'col-3 h6 upper font-bold color-medium'}>w/ Assistant</div>
                    </div>
                    {
                        Object.keys(this.pricing).map(key => (
                            <div className={'row mt-2 pl-4 pr-4'}>
                                <div className={'col-3 h5 upper font-bold color-light'}>
                                    {(this.pricing as any)[key].title}
                                    <div className={'h7 upper font-bold color-primary mt-1'}>
                                        {(this.pricing as any)[key].subtitle}
                                    </div>
                                </div>
                                { Object.keys((this.pricing as any)[key].prices).map(k => <div className={'col-3 h5 upper color-white'}>${(this.pricing as any)[key].prices[k]}</div>) }
                            </div>
                        ))
                    }
                    <div className={'row mt-2 pl-4 pr-4 mb-2'}>
                        <div className={'col-3'}></div>
                        <div className={'col-3 h5 upper color-white'}>
                            <Button
                                containerClassName={'w-100'}
                                className={'p-3 color-white font-title justify-content-center'}
                                children={<span><div>Book Session</div><div>w/ Engineer</div></span>}
                                textColor={colors.white}
                                backgroundColor={colors.primary}
                                onClick={()=>{}}
                            />
                        </div>
                        <div className={'col-3 h5 upper color-white'}>
                            <Button
                                containerClassName={'w-100'}
                                className={'p-3 color-white font-title justify-content-center'}
                                children={<span><div>Book Session</div><div>w/ Producer</div></span>}
                                textColor={colors.white}
                                backgroundColor={colors.primary}
                                onClick={()=>{}}
                            />
                        </div>
                        <div className={'col-3 h5 upper color-white'}>
                            <Button
                                containerClassName={'w-100'}
                                className={'p-3 color-white font-title justify-content-center'}
                                children={<span><div>Book Session</div><div>w/ Assistant</div></span>}
                                textColor={colors.white}
                                backgroundColor={colors.primary}
                                onClick={()=>{}}
                            />
                        </div>
                    </div>
                    <div className={'row mt-4 pl-4 pr-4'}>
                        <div className={'col-3 h3 upper font-bold color-light d-flex flex-column justify-content-center'}>
                            Summer
                            <div className={'h5 upper font-bold color-primary mt-1'}>
                                Specials
                            </div>
                        </div>
                        {
                            this.specials.map(special => (
                                <div className={'col-3 h5 upper color-light'}>
                                    <div className={'h7 upper font-bold color-primary mb-1'}>
                                        {special.time}
                                    </div>
                                    {special.text}
                                    <div className={'h5 font-bold upper color-white mt-2'}>
                                        {special.price}
                                    </div>
                                    <div className={'h7 font-bold upper color-medium mt-2'}>
                                        {special.subtext}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

    public renderMobile = () => {
        return (
            <div className={'wrapper d-flex flex-column justify-content-between pl-4 pr-4 mt-4 mb-4'}>
                <div className={'d-flex flex-column justify-content-between pt-4 pb-4 pl-4 mt-4 btn-box inactive'}>
                    <div className={'mb-2 pr-4'}>
                        <div className={'color-white font-title upper h1 mt-0 mb-1'}>
                            BOOKING
                        </div>
                        <div className={'color-primary font-secondary upper h6 mb-0'}>
                            BOOK SESSIONS IN NYC OR LA
                        </div>
                    </div>
                    <div className={'booking-mobile normal-scroll'}>
                        <div className={'d-flex flex-row'}>
                            <div>
                                <div className={'row mt-2 pl-4 pr-4'}>
                                    <div className={'col-3'}></div>
                                    <div className={'col-3 h6 upper font-bold color-medium'}>w/ Engineer</div>
                                    <div className={'col-3 h6 upper font-bold color-medium'}>w/ Producer</div>
                                    <div className={'col-3 h6 upper font-bold color-medium'}>w/ Assistant</div>
                                </div>
                                {
                                    Object.keys(this.pricing).map(key => (
                                        <div className={'row mt-2 pl-4 pr-4'}>
                                            <div className={'col-3 h5 upper font-bold color-light'}>
                                                {(this.pricing as any)[key].title}
                                                <div className={'h7 upper font-bold color-primary mt-1'}>
                                                    {(this.pricing as any)[key].subtitle}
                                                </div>
                                            </div>
                                            { Object.keys((this.pricing as any)[key].prices).map(k => <div className={'col-3 h5 upper color-white'}>${(this.pricing as any)[key].prices[k]}</div>) }
                                        </div>
                                    ))
                                }
                                <div className={'row mt-2 pl-4 pr-4 mb-0 pb-0'}>
                                    <div className={'col-3'}></div>
                                    <div className={'col-3 h5 upper color-white'}>
                                        <Button
                                            containerClassName={'w-100 book-button'}
                                            className={'p-3 color-white font-title justify-content-center'}
                                            children={<span><div>Book Session</div><div>w/ Engineer</div></span>}
                                            textColor={colors.white}
                                            backgroundColor={colors.primary}
                                            onClick={()=>{}}
                                        />
                                    </div>
                                    <div className={'col-3 h5 upper color-white'}>
                                        <Button
                                            containerClassName={'w-100 book-button'}
                                            className={'p-3 color-white font-title justify-content-center'}
                                            children={<span><div>Book Session</div><div>w/ Producer</div></span>}
                                            textColor={colors.white}
                                            backgroundColor={colors.primary}
                                            onClick={()=>{}}
                                        />
                                    </div>
                                    <div className={'col-3 h5 upper color-white'}>
                                        <Button
                                            containerClassName={'w-100 book-button'}
                                            className={'p-3 color-white font-title justify-content-center'}
                                            children={<span><div>Book Session</div><div>w/ Assistant</div></span>}
                                            textColor={colors.white}
                                            backgroundColor={colors.primary}
                                            onClick={()=>{}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={'h-100 d-flex flex-row align-items-center justify-content-center'}>
                                    <div className={'p-4 h3 upper font-bold color-light d-flex flex-column justify-content-center'}>
                                        Summer
                                        <div className={'h5 upper font-bold color-primary mt-1'}>
                                            Specials
                                        </div>
                                    </div>
                                    {
                                        this.specials.map(special => (
                                            <div className={'h5 upper color-light pl-3 pr-3'}>
                                                <div className={'h7 upper font-bold color-primary mb-1'}>
                                                    {special.time}
                                                </div>
                                                {special.text}
                                                <div className={'h5 font-bold upper color-white mt-2'}>
                                                    {special.price}
                                                </div>
                                                <div className={'h7 font-bold upper color-medium mt-2'}>
                                                    {special.subtext}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}