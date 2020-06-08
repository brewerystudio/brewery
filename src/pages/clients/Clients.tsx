import React from 'react'
import { Page } from '../Page'
import { shuffled } from '../../constants'
import './Clients.sass'

export class Clients extends Page {

    private client!:HTMLDivElement

    private clients = [
        'Kid Cudi',
        'Skrillex',
        'Raekwon',
        'Common',
        'Jhene Aiko',
        'Talib Kweli',
        'Method Man',
        'Redman',
        'Matisyahu',
        'ILoveMakonnen',
        'Smokepurpp',
        'Ciara',
        'Tory Lanes',
        'Boys Noize',
        'Life of Dillon',
        'King Chip',
        'Mick Jenkins',
        'ChancetheRapper',
        'Flosstradamus',
        'JoJo Pellegrino',
        'Melanie Fiona',
        'John Forte',
        'Rohan Marley',
        'Mick Jenkins',
        'Nosaj Thing',
        'Kascade',
        'Odd Future',
        'Joey Bada$$',
        'Pusha T',
        'Lloyd Banks',
        'Fatman Scoop',
        'Mac Miller',
        'A$AP Mob',
        'Clams Casino',
        'Styles P',
        '88 Keys',
        'Felly',
        'Dai Burger',
        'Lil Uzi Vert',
        'Cyhi Da Prynce',
        'Wifisfuneral',
        'Racionais MCs',
        'Logic',
        'Awkwafina',
        'Statik Selektah',
        'Denzel Curry',
        'Travis Scott',
        'Burna Boy',
        'Ray J',
        'Fat Tony',
        // 'D Savage',
        'OG Maco'
    ]

    componentDidMount = () => {
        this.clients = shuffled(this.clients)
        this.renderClients(0)
    }

    public renderDesktop = () => {
        return (
            <div className={'wrapper h-75 d-flex flex-column justify-content-between pl-4 pr-4 mt-4 mb-4'}>
                <div className={'d-flex flex-column justify-content-between pt-4 mt-4'}>
                    <div className={'mb-4'}>
                        <div className={'color-primary font-secondary upper h4 mb-0'}>
                            CLIENTS
                        </div>
                        <div ref={r => this.client = r!} className={'color-white font-title upper display-4 mt-0'} />
                    </div>
                    <div className={'row mt-2 pl-4 pr-4'}>
                        <div className={'col-4'}>
                            {
                                this.clients.slice(0, Math.floor(this.clients.length / 3)).map((client, i) => (
                                    <div key={`client-1-${i}`} className={'color-light h7 mt-1 mb-1'}>{client}</div>
                                ))
                            }
                        </div>
                        <div className={'col-4'}>
                            {
                                this.clients.slice(Math.floor(this.clients.length / 3), 2*(Math.floor(this.clients.length / 3))).map((client, i) => (
                                    <div key={`client-2-${i}`} className={'color-light h7 mt-1 mb-1'}>{client}</div>
                                ))
                            }
                        </div>
                        <div className={'col-4'}>
                            {
                                this.clients.slice(2*(Math.floor(this.clients.length / 3))).map((client, i) => (
                                    <div key={`client-3-${i}`} className={'color-light h7 mt-1 mb-1'}>{client}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    public renderMobile = () => {
        return (
            <div className={'wrapper h-75 d-flex flex-column justify-content-between pl-4 pr-4 mt-2 mb-4'}>
                <div className={'d-flex flex-column justify-content-between pt-4'}>
                    <div className={'mb-4'}>
                        <div className={'color-primary font-secondary upper h4 mb-0'}>
                            CLIENTS
                        </div>
                        <div ref={r => this.client = r!} className={'color-white font-title upper h3 mt-0'} />
                    </div>
                    <div className={'row pl-4 pr-4'}>
                        <div className={'col-6'}>
                            {
                                this.clients.slice(0, Math.floor(this.clients.length / 3)).map((client, i) => (
                                    <div key={`client-1-${i}`} className={'color-light h7 mt-1 mb-1'}>{client}</div>
                                ))
                            }
                        </div>
                        <div className={'col-6'}>
                            {
                                this.clients.slice(Math.floor(this.clients.length / 3), 2 * Math.floor(this.clients.length / 3)).map((client, i) => (
                                    <div key={`client-2-${i}`} className={'color-light h7 mt-1 mb-1'}>{client}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    private renderClients = (idx:number) => {
        const client = this.clients[idx]
        if (this.client) {
            this.client.innerHTML = client
        }
        setTimeout(() => this.renderClients(idx < this.clients.length - 1 ? ++idx : 0), 150)
    }

}