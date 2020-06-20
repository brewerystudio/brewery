import React, { Fragment } from 'react'
import { Page } from '../Page'
import './Info.sass'

import { DeviceUtil, Shout } from '../../utils'
import { Icon, IconName, FlipCard } from '../../components'
import { shouts } from '../../constants'

type InfoPage = 'services' | 'gear' | 'floorplan' | 'history'

export class Info extends Page {

    private static FULL_CARD_HEIGHT_PCT = .65
    private static CARD_PADDING_PX = 8

    private nyGearFlipCard!:FlipCard
    private laGearFlipCard!:FlipCard

    public state = {
        page: 'services' as InfoPage,

        nyGearPage: 'A' as 'A' | 'B' | 'C',
        laGearPage: 'A' as 'A' | 'B',
    }

    constructor(props:any) {
        super(props)
        // Automatically adjust the height of the thumbnails as the page scales
        DeviceUtil.onReady(() => {
            this.setDynamicBoxHeights()
            DeviceUtil.onResize(() => {
                this.setDynamicBoxHeights()
            })
            this.configureDragScrolling()
        })
    }

    public componentDidUpdate = () => {
        // Never forget to adjust the thumbnail size when the state changes
        this.setDynamicBoxHeights()
    }
    
    public renderDesktop = () => {
        const page = this.state.page
        const active = (p:InfoPage) => p === page ? 'active' : ''

        return (
            <div className={'wrapper d-flex flex-column align-items-center'}>
                <div className={'w-75'}>
                    <div className={'pl-4 pr-4 mb-2'}>
                        <div className={'row'}>
                            <div className={'col-3 pl-1 pr-1'}>
                                <button onClick={() => this.setPage('services')} className={`color-white btn-box animated w-100 font-tertiary ${active('services')}`}>SERVICES</button>
                            </div>
                            <div className={'col-3 pl-1 pr-1'}>
                                <button onClick={() => this.setPage('gear')} className={`color-white btn-box animated w-100 font-tertiary ${active('gear')}`}>GEAR</button>
                            </div>
                            <div className={'col-3 pl-1 pr-1'}>
                                <button onClick={() => this.setPage('floorplan')} className={`color-white btn-box animated w-100 font-tertiary ${active('floorplan')}`}>FLOORPLAN</button>
                            </div>
                            <div className={'col-3 pl-1 pr-1'}>
                                <button onClick={() => this.setPage('history')} className={`color-white btn-box animated w-100 font-tertiary ${active('history')}`}>HISTORY</button>
                            </div>
                        </div>
                    </div>
                    {
                        page === 'services' &&
                        <div className={'info-page pl-4 pr-4'}>
                            <div className={'row'} style={{ marginTop: Info.CARD_PADDING_PX }}>
                                <div className={'col-6 pl-1 pr-1'}>
                                    <FlipCard className={'w-100 h-100 info-thumbnail-small color-white btn-box'}
                                        childrenFront={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <Icon name={IconName.Microphone} width={'2rem'} height={'4rem'} />
                                                <div className={'font-title h6 mt-3 upper'}>RECORDING & EDITING</div>
                                            </div>
                                        }
                                        childrenBack={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <div className={'font-title h5 mb-2 upper'}>RECORDING & EDITING</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>5 control rooms w/ vocal booths & live rooms for tracking</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Pro Tools & premium outboard plus dozens of microphone choices</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Drums, amps, keyboard, and more</div>
                                            </div>
                                        }
                                    />
                                </div>
                                <div className={'col-6 pl-1 pr-1'}>
                                    <FlipCard className={'info-thumbnail-small color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                        childrenFront={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <Icon name={IconName.Microphone} width={'2rem'} height={'4rem'} />
                                                <div className={'font-title h6 mt-3 upper'}>MIXING & MASTERING</div>
                                            </div>
                                        }
                                        childrenBack={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <div className={'font-title h5 mb-2 upper'}>MIXING & MASTERING</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Platinum-selling & grammy award-winning engineers</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Mix previously recorded tracks or sessions</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Clean, define & polish your sound</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Master your mixes to industry standards</div>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                            <div className={'row'} style={{ marginTop: Info.CARD_PADDING_PX }}>
                                <div className={'col-6 pl-1 pr-1'}>
                                    <FlipCard className={'info-thumbnail-small color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                        childrenFront={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <Icon name={IconName.Film} width={'2.4rem'} height={'2.4rem'} />
                                                <div className={'font-title h6 mt-3 upper'}>VOICEOVER, POST & FILM</div>
                                            </div>
                                        }
                                        childrenBack={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <div className={'font-title h5 mb-2 upper'}>VOICEOVER, POST & FILM</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>ADR & voiceovers</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Podcasts & audiobooks</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Noise reduction & sound restoration</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Sound design & scoring</div>
                                            </div>
                                        }
                                    />
                                </div>
                                <div className={'col-6 pl-1 pr-1'}>
                                    <FlipCard className={'info-thumbnail-small color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                        childrenFront={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <Icon name={IconName.Film} width={'2.4rem'} height={'2.4rem'} />
                                                <div className={'font-title h6 mt-3 upper'}>PRODUCTION & COMPOSITION</div>
                                            </div>
                                        }
                                        childrenBack={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <div className={'font-title h5 mb-2 upper'}>PRODUCTION & COMPOSITION</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Create custom instrumentals</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Polish & add to existing tracks</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Remixes & replays</div>
                                                <div className={'font-secondary h6 lh-1.25 color-light'}>Songwriting & composition</div>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    {
                        page === 'gear' &&
                        <div className={'info-page pl-4 pr-4'}>
                            <div className={'row p-0'}>
                                <div className={'col-6 pl-1 pr-1'}
                                    // Prevent page scrolling when hovering over the card
                                    onMouseOver={() => Shout.publish(shouts.PAGE_SCROLL_OFF)}
                                    onMouseOut={() => Shout.publish(shouts.PAGE_SCROLL_ON)}
                                >
                                    <FlipCard ref={r => this.nyGearFlipCard = r!} flipOnClick={'back'} className={'w-100 info-thumbnail-long color-white btn-box p-0'}
                                        childrenFront={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <Icon name={IconName.NewYork} width={'4rem'} height={'4rem'} />
                                                <div className={'font-title h6 mt-3 mb-4 upper'}>NEW YORK</div>
                                                <button onClick={() => this.onNYGear('A')} className={'h1 btn font-bold font-secondary mt-3 upper color-light clickable animated'}>ROOM A GEAR</button>
                                                <button onClick={() => this.onNYGear('B')} className={'h1 btn font-bold font-secondary mt-1 upper color-light clickable animated'}>ROOM B GEAR</button>
                                                <button onClick={() => this.onNYGear('C')} className={'h1 btn font-bold font-secondary mt-1 upper color-light clickable animated'}>ROOM C GEAR</button>
                                            </div>
                                        }
                                        childrenBack={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <div className={'h7 upper mt-3'}>NEW YORK</div>
                                                <div className={'font-title h4 upper m-0 mb-3'}>ROOM {this.state.nyGearPage} GEAR</div>
                                                {
                                                    this.state.nyGearPage === 'A' &&
                                                        <Fragment>
                                                            <div className={'h8 color-light overflow-auto p-3'}>
                                                                <div className={'font-title h6 mb-1 upper'}>COMPUTER</div>
                                                                Apple iMac Pro
                                                                <div className={'font-title h6 mt-3 mb-1 upper'}>SOFTWARE</div>
                                                                Pro Tools,
                                                                Logic Pro X,
                                                                Ableton Live
                                                                <div className={'font-title h6 mt-3 mb-1 upper'}>HARDWARE</div>
                                                                Antelope Orion32 HD Gen 3 (32 In, 32 Out),
                                                                Universal Audio Apollo Twin
                                                                <div className={'font-title h6 mt-3 mb-1 upper'}>MONITORING</div>
                                                                Augspurger Solo Mains,
                                                                ProAc Studio SM100,
                                                                Avantone Mixcube,
                                                                TC Electronic Clarity M Stereo,
                                                                Antelope Satori & R4S Monitoring Controller & Remote,
                                                                Redco Audio Little Red Cue Box
                                                                <div className={'font-title h6 mt-3 mb-1 upper'}>OUTBOARD</div>
                                                                Tube-Tech CL-1B,
                                                                Warm Audio WA273-EQ
                                                                Warm Audio WA-412 (x2)
                                                                <div className={'font-title h6 mt-3 mb-1 upper'}>MICROPHONES</div>
                                                                Audix D6,
                                                                AKG c414b ULS (x2),
                                                                Audio Technica 4060,
                                                                Countryman DI (x2),
                                                                Electrovoice Cardinal,
                                                                Electrovoice RE20,
                                                                Oktava 012 (x2),
                                                                Oktava Mk319,
                                                                Radial DI,
                                                                Russo Audio Tube w/ C12 capsule,
                                                                Sennheiser e604 (x3),
                                                                Sennheiser MD421,
                                                                Shure Beta 52 (x2),
                                                                Shure Beta 58A (x2),
                                                                Shure Beta 98,
                                                                Shure SM57 (x5),
                                                                Shure SM58,
                                                                Neumann M149,
                                                                Neumann U87,
                                                                Telefunken RTF AK47 (x2),
                                                                Warm Audio WA-47,
                                                                Warm Audio WA-84 CE (x2),
                                                                Warm Audio WA-87 (x2)
                                                                <div className={'font-title h6 mt-3 mb-1 upper'}>AMPS & PERCUSSION</div>
                                                                Fender Jazz Deluxe Amp,
                                                                Orange County Custom Drumkit (20” kick, 14“ snare,12” & 16“ Toms),
                                                                Tama Drumkit (22” kick, 14” and 16” Toms”),
                                                                Pearl Export Snare 14”,
                                                                Orange Dual Terror Tube Head,
                                                                Vintage Modified Bandmaster VM212,
                                                                Orange FS-1,
                                                                Yamaha Acoustic Guitar,
                                                                Maracas,
                                                                Tambourine,
                                                                Chimes,
                                                                Congas,
                                                                Shakers
                                                                <div className={'font-title h6 mt-3 mb-1 upper'}>KEYBOARDS & CONTROLLERS</div>
                                                                Acorn Masterkey 61,
                                                                Akai LPK251
                                                            </div>
                                                        </Fragment>
                                                    }
                                                        {
                                                            this.state.nyGearPage === 'B' &&
                                                            <Fragment>
                                                                
                                                            </Fragment>
                                                        }
                                                        {
                                                            this.state.nyGearPage === 'C' &&
                                                            <Fragment>
                                                                
                                                            </Fragment>
                                                        }
                                            </div>
                                        }
                                    />
                                </div>
                                <div className={'col-6 pl-1 pr-1'}>
                                    <FlipCard ref={r => this.laGearFlipCard = r!} flipOnClick={'back'} className={'info-thumbnail-long color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center p-0'}
                                        childrenFront={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <Icon name={IconName.LosAngeles} width={'4rem'} height={'4rem'} />
                                                <div className={'font-title h6 mt-3 mb-4 upper'}>LOS ANGELES</div>
                                                <button onClick={() => this.onLAGear('A')} className={'h1 btn font-bold font-secondary mt-3 upper color-light clickable animated'}>ROOM A GEAR</button>
                                                <button onClick={() => this.onLAGear('B')} className={'h1 btn font-bold font-secondary mt-1 mb-4 upper color-light clickable animated'}>ROOM B GEAR</button>
                                            </div>
                                        }
                                        childrenBack={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <div className={'h7 upper mt-3'}>LOS ANGELES</div>
                                                <div className={'font-title h4 upper m-0 mb-3'}>ROOM {this.state.laGearPage} GEAR</div>
                                                {
                                                    this.state.laGearPage === 'A' &&
                                                    <Fragment>
                                                        <div className={'h8 color-light overflow-auto p-3'}>
                                                            <div className={'font-title h6 mb-1 upper'}>COMPUTER</div>
                                                            Mac Pro 3.5 GHz 6-Core
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>SOFTWARE</div>
                                                            Pro Tools HD12,
                                                            Logic X,
                                                            Ableton Live 9,
                                                            UAD-2 Accelerator
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>HARDWARE</div>
                                                            Lynx Aurora 16 (16in, 16 out),
                                                            Avid Mix,
                                                            Avid Control
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>MONITORING</div>
                                                            Barefoot Monitor Micromain 27,
                                                            Genelec 1031a,
                                                            Yamaha NS-10M,
                                                            Dangerous Monitor ST,
                                                            Presonus HP4 Headphone Mixer
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>OUTBOARD</div>
                                                            A-Designs Pacifica Pre,
                                                            API 3124 Pre,
                                                            Alesis Microverb,
                                                            dBX 160A,
                                                            dBX 166,
                                                            Empirical Labs Distressor EL-8 (x2),
                                                            Presonus Studio Channel,
                                                            Stam Audio LA-2A,
                                                            Universal Audio 1176LN,
                                                            Vintech x73i (x2)
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>MICROPHONES & DIRECT BOXES</div>
                                                            AKG c451b,
                                                            Antelope Audio Edge Solo,
                                                            Apex 360,
                                                            Audio Technica 4050 (x2),
                                                            Neumann TLM 67,
                                                            Radial ProD2,
                                                            Shure Beta 52,
                                                            Shure Beta 58,
                                                            Shure SM57 (x2),
                                                            Telefunken AR-51
                                                        </div>
                                                    </Fragment>
                                                }
                                                {
                                                    this.state.laGearPage === 'B' &&
                                                    <Fragment>
                                                        <div className={'h8 color-light'}>
                                                            <div className={'font-title h6 mb-1 upper'}>COMPUTER</div>
                                                            Mac Mini
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>SOFTWARE</div>
                                                            Pro Tools,
                                                            Logic X,
                                                            Ableton Live 9
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>HARDWARE</div>
                                                            Antelope Audio Discrete 8 Interface
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>MONITORING</div>
                                                            Antelope Discrete 8 Interface,
                                                            Presonus HP4 Headphone Mixer,
                                                            Yamaha HS-10 Monitors
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>OUTBOARD</div>
                                                            Avalon 737 Black Pre-amp,
                                                            Antelope 8 channel Pre-amp,
                                                            <div className={'font-title h6 mt-3 mb-1 upper'}>MICROPHONES & DIRECT BOXES</div>
                                                            AKG c451b,
                                                            Antelope Audio Edge Solo,
                                                            Apex 360,
                                                            Audio Technica 4050 (x2),
                                                            Neumann TLM 67,
                                                            Radial ProD2,
                                                            Shure Beta 52,
                                                            Shure Beta 58,
                                                            Shure SM57 (x2),
                                                            Telefunken AR-51
                                                        </div>
                                                    </Fragment>
                                                }
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    {
                        page === 'floorplan' &&
                        <div className={'info-page pl-4 pr-4'}>
                            <div className={'row p-0 '}>
                                <div className={'col-12 pl-1 pr-1'}>
                                    <FlipCard ref={r => this.nyGearFlipCard = r!} flipOnClick={'both'} className={'w-100 info-thumbnail-wide color-white btn-box'}
                                        childrenFront={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <div className={'h7 upper mt-3'}>FLOOR PLAN</div>
                                                <div className={'font-title h4 upper m-0 mb-3'}>NEW YORK</div>
                                                <img src="assets/floorplans/ny.png" alt="New York Floor Plan" className={'w-100'} />
                                                <div className={'font-title H7 upper m-0 mt-3 mb-3 color-medium'}>PRESS TO VIEW LOS ANGELES</div>
                                            </div>
                                        }
                                        childrenBack={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <div className={'h7 upper mt-3'}>FLOOR PLAN</div>
                                                <div className={'font-title h4 upper m-0 mb-3'}>LOS ANGELES</div>
                                                <img src="assets/floorplans/la.png" alt="Los Angeles Floor Plan" className={'w-100'} />
                                                <div className={'font-title H7 upper m-0 mt-3 mb-3 color-medium'}>PRESS TO VIEW NEW YORK</div>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    {
                        page === 'history' &&
                        <div className={'info-page pl-4 pr-4'}>
                            <div className={'row p-0 '}>
                                <div className={'col-12 pl-1 pr-1'}>
                                    <FlipCard ref={r => this.nyGearFlipCard = r!} flipOnClick={'both'} className={'w-100 info-thumbnail-wide color-white btn-box'}
                                        childrenFront={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <div className={'h7 upper mt-3'}>BREWERY RECORDING STUDIO</div>
                                            <div className={'font-title h4 upper m-0 mb-4'}>HISTORY</div>
                                                <img src="assets/history/team.jpg" alt="Team" className={'w-50'} />
                                                <div className={'font-title H7 upper m-0 mt-3 mb-3 color-medium'}>PRESS TO TIME TRAVEL</div>
                                            </div>
                                        }
                                        childrenBack={
                                            <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                                <div className={'h7 upper mt-3'}>BREWERY RECORDING STUDIO</div>
                                                <div className={'font-title h4 upper m-0 mb-3'}>HISTORY</div>
                                                <div className={'pl-4 pr-4'}>
                                                    <p className={'lh-1.25 mt-2 mb-2'}>
                                                        Engineer Andrew Krivonos opened Southfall Studios in Park Slope, Brooklyn in 2005 as a mix room for his recording projects. Word of mouth spread immediately within three years, Andrew upgraded the studio to a new facility in an old microbrewery in Bushwick, changing its name to the Brewery Recording Studio.
                                                    </p>
                                                    <p className={'lh-1.25 mt-2 mb-2'}>
                                                        Meanwhile, producer Dot Da Genius was developing his own production company, Headbanga Muzik, with artist Kid Cudi out of his project studio in Brooklyn.
                                                    </p>
                                                    <p className={'lh-1.25 mt-2 mb-2'}>
                                                        Andrew and Dot joined to move the Brewery to its newest facility at 910 Grand Street in May 2009. Designed and constructed by the staff, the facility and its impressive engineers have quickly made the Brewery one of the highest profile studio environments in New York.
                                                    </p>                                                
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
    
    public renderMobile = () => {
        const page = this.state.page
        const active = (p:InfoPage) => p === page ? 'active' : ''

        return (
            <div className={'wrapper h-75 d-flex flex-column justify-content-center mt-4'}>
                <div className={'pt-4 pl-4 pr-4 mb-4'}>
                    <div className={'row m-0 pb-2'}>
                        <div className={'col-6 pr-1'}>
                            <button onClick={() => this.setPage('services')} className={`color-white btn-box animated w-100 font-tertiary ${active('services')}`}>SERVICES</button>
                        </div>
                        <div className={'col-6 pl-1'}>
                            <button onClick={() => this.setPage('gear')} className={`color-white btn-box animated w-100 font-tertiary ${active('gear')}`}>GEAR</button>
                        </div>
                    </div>
                    <div className={'row m-0'}>
                        <div className={'col-6 pr-1'}>
                            <button onClick={() => this.setPage('floorplan')} className={`color-white btn-box animated w-100 font-tertiary ${active('floorplan')}`}>FLOORPLAN</button>
                        </div>
                        <div className={'col-6 pl-1'}>
                            <button onClick={() => this.setPage('history')} className={`color-white btn-box animated w-100 font-tertiary ${active('history')}`}>HISTORY</button>
                        </div>
                    </div>
                </div>
                {
                    page === 'services' &&
                    <div
                        // Prevent page scrolling when hovering over the card
                        onMouseOver={() => Shout.publish(shouts.PAGE_SCROLL_OFF)}
                        onMouseOut={() => Shout.publish(shouts.PAGE_SCROLL_ON)}
                    >
                        <div id="services-mobile" className={'h-scroll pl-4'}>
                            <div className={'w-80 mr-2'}>
                                <FlipCard className={'info-thumbnail-mobile color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                    childrenFront={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <Icon name={IconName.Microphone} width={'2rem'} height={'4rem'} />
                                            <div className={'font-title h6 mt-3 upper'}>RECORDING & EDITING</div>
                                        </div>
                                    }
                                    childrenBack={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4'}>
                                            <div className={'font-title h5 mb-2 upper'}>RECORDING & EDITING</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>5 control rooms w/ vocal booths & live rooms for tracking</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Pro Tools & premium outboard plus dozens of microphone choices</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Drums, amps, keyboard, and more</div>
                                        </div>
                                    }
                                />
                            </div>
                            <div className={'w-80 mr-2'}>
                                <FlipCard className={'info-thumbnail-mobile color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                    childrenFront={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <Icon name={IconName.Microphone} width={'2rem'} height={'4rem'} />
                                            <div className={'font-title h6 mt-3 upper'}>MIXING & MASTERING</div>
                                        </div>
                                    }
                                    childrenBack={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4'}>
                                            <div className={'font-title h5 mb-2 upper'}>MIXING & MASTERING</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Platinum-selling & grammy award-winning engineers</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Mix previously recorded tracks or sessions</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Clean, define & polish your sound</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Master your mixes to industry standards</div>
                                        </div>
                                    }
                                />
                            </div>
                            <div className={'w-80 mr-2'}>
                                <FlipCard className={'info-thumbnail-mobile color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                    childrenFront={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <Icon name={IconName.Film} width={'2.4rem'} height={'2.4rem'} />
                                            <div className={'font-title h6 mt-3 upper'}>VOICEOVER, POST & FILM</div>
                                        </div>
                                    }
                                    childrenBack={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4'}>
                                            <div className={'font-title h5 mb-2 upper'}>VOICEOVER, POST & FILM</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>ADR & voiceovers</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Podcasts & audiobooks</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Noise reduction & sound restoration</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Sound design & scoring</div>
                                        </div>
                                    }
                                />
                            </div>
                            <div className={'w-80 mr-2'}>
                                <FlipCard className={'info-thumbnail-mobile color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                    childrenFront={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <Icon name={IconName.Film} width={'2.4rem'} height={'2.4rem'} />
                                            <div className={'font-title h6 mt-3 upper'}>PRODUCTION & COMPOSITION</div>
                                        </div>
                                    }
                                    childrenBack={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center p-4'}>
                                            <div className={'font-title h5 mb-2 upper'}>PRODUCTION & COMPOSITION</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Create custom instrumentals</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Polish & add to existing tracks</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Remixes & replays</div>
                                            <div className={'font-secondary h6 lh-1.25 w-100 wrap color-light'}>Songwriting & composition</div>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                }
                {
                    page === 'gear' &&
                    <div
                        // Prevent page scrolling when hovering over the card
                        onMouseOver={() => Shout.publish(shouts.PAGE_SCROLL_OFF)}
                        onMouseOut={() => Shout.publish(shouts.PAGE_SCROLL_ON)}
                    >
                        <div id="gear-mobile" className={'h-scroll pl-4'}>
                            <div className={'w-80 mr-2'}>
                                <FlipCard ref={r => this.nyGearFlipCard = r!} flipOnClick={'both'} className={'info-thumbnail-mobile color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                    childrenFront={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <Icon name={IconName.NewYork} width={'4rem'} height={'4rem'} />
                                            <div className={'font-title h6 mt-3 upper'}>NEW YORK</div>
                                            <div className={'h1 btn font-bold font-secondary mt-2 upper color-light clickable animated'}>ROOM A GEAR</div>
                                        </div>
                                    }
                                    childrenBack={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <div className={'h7 upper mt-3'}>NEW YORK</div>
                                            <div className={'font-title h4 upper m-0 mb-3'}>ROOM A GEAR</div>
                                            <div className={'h8 color-light overflow-auto p-3'}>
                                                <div className={'font-title h6 mb-1 upper'}>COMPUTER</div>
                                                Apple iMac Pro
                                                <div className={'font-title h6 mt-3 mb-1 upper'}>SOFTWARE</div>
                                                Pro Tools,
                                                Logic Pro X,
                                                Ableton Live
                                                <div className={'font-title h6 mt-3 mb-1 upper'}>HARDWARE</div>
                                                Antelope Orion32 HD Gen 3 (32 In, 32 Out),
                                                Universal Audio Apollo Twin
                                                <div className={'font-title h6 mt-3 mb-1 upper'}>MONITORING</div>
                                                Augspurger Solo Mains,
                                                ProAc Studio SM100,
                                                Avantone Mixcube,
                                                TC Electronic Clarity M Stereo,
                                                Antelope Satori & R4S Monitoring Controller & Remote,
                                                Redco Audio Little Red Cue Box
                                                <div className={'font-title h6 mt-3 mb-1 upper'}>OUTBOARD</div>
                                                Tube-Tech CL-1B,
                                                Warm Audio WA273-EQ
                                                Warm Audio WA-412 (x2)
                                                <div className={'font-title h6 mt-3 mb-1 upper'}>MICROPHONES</div>
                                                Audix D6,
                                                AKG c414b ULS (x2),
                                                Audio Technica 4060,
                                                Countryman DI (x2),
                                                Electrovoice Cardinal,
                                                Electrovoice RE20,
                                                Oktava 012 (x2),
                                                Oktava Mk319,
                                                Radial DI,
                                                Russo Audio Tube w/ C12 capsule,
                                                Sennheiser e604 (x3),
                                                Sennheiser MD421,
                                                Shure Beta 52 (x2),
                                                Shure Beta 58A (x2),
                                                Shure Beta 98,
                                                Shure SM57 (x5),
                                                Shure SM58,
                                                Neumann M149,
                                                Neumann U87,
                                                Telefunken RTF AK47 (x2),
                                                Warm Audio WA-47,
                                                Warm Audio WA-84 CE (x2),
                                                Warm Audio WA-87 (x2)
                                                <div className={'font-title h6 mt-3 mb-1 upper'}>AMPS & PERCUSSION</div>
                                                Fender Jazz Deluxe Amp,
                                                Orange County Custom Drumkit (20” kick, 14“ snare,12” & 16“ Toms),
                                                Tama Drumkit (22” kick, 14” and 16” Toms”),
                                                Pearl Export Snare 14”,
                                                Orange Dual Terror Tube Head,
                                                Vintage Modified Bandmaster VM212,
                                                Orange FS-1,
                                                Yamaha Acoustic Guitar,
                                                Maracas,
                                                Tambourine,
                                                Chimes,
                                                Congas,
                                                Shakers
                                                <div className={'font-title h6 mt-3 mb-1 upper'}>KEYBOARDS & CONTROLLERS</div>
                                                Acorn Masterkey 61,
                                                Akai LPK251
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                            <div className={'w-80 mr-2'}>
                                <FlipCard ref={r => this.laGearFlipCard = r!} flipOnClick={'back'} className={'info-thumbnail-mobile color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                    childrenFront={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <Icon name={IconName.LosAngeles} width={'4rem'} height={'4rem'} />
                                            <div className={'font-title h6 mt-3 mb-4 upper'}>LOS ANGELES</div>
                                            <button onClick={() => this.onLAGear('A')} className={'h1 btn font-bold font-secondary mt-3 upper color-light clickable animated'}>ROOM A GEAR</button>
                                            <button onClick={() => this.onLAGear('B')} className={'h1 btn font-bold font-secondary mt-1 mb-4 upper color-light clickable animated'}>ROOM B GEAR</button>
                                        </div>
                                    }
                                    childrenBack={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <div className={'h7 upper mt-3'}>LOS ANGELES</div>
                                            <div className={'font-title h4 upper m-0 mb-3'}>ROOM {this.state.laGearPage} GEAR</div>
                                            {
                                                this.state.laGearPage === 'A' &&
                                                <Fragment>
                                                    <div className={'h8 color-light overflow-auto p-3'}>
                                                        <div className={'font-title h6 mb-1 upper'}>COMPUTER</div>
                                                        Mac Pro 3.5 GHz 6-Core
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>SOFTWARE</div>
                                                        Pro Tools HD12,
                                                        Logic X,
                                                        Ableton Live 9,
                                                        UAD-2 Accelerator
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>HARDWARE</div>
                                                        Lynx Aurora 16 (16in, 16 out),
                                                        Avid Mix,
                                                        Avid Control
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>MONITORING</div>
                                                        Barefoot Monitor Micromain 27,
                                                        Genelec 1031a,
                                                        Yamaha NS-10M,
                                                        Dangerous Monitor ST,
                                                        Presonus HP4 Headphone Mixer
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>OUTBOARD</div>
                                                        A-Designs Pacifica Pre,
                                                        API 3124 Pre,
                                                        Alesis Microverb,
                                                        dBX 160A,
                                                        dBX 166,
                                                        Empirical Labs Distressor EL-8 (x2),
                                                        Presonus Studio Channel,
                                                        Stam Audio LA-2A,
                                                        Universal Audio 1176LN,
                                                        Vintech x73i (x2)
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>MICROPHONES & DIRECT BOXES</div>
                                                        AKG c451b,
                                                        Antelope Audio Edge Solo,
                                                        Apex 360,
                                                        Audio Technica 4050 (x2),
                                                        Neumann TLM 67,
                                                        Radial ProD2,
                                                        Shure Beta 52,
                                                        Shure Beta 58,
                                                        Shure SM57 (x2),
                                                        Telefunken AR-51
                                                    </div>
                                                </Fragment>
                                            }
                                            {
                                                this.state.laGearPage === 'B' &&
                                                <Fragment>
                                                    <div className={'h8 color-light'}>
                                                        <div className={'font-title h6 mb-1 upper'}>COMPUTER</div>
                                                        Mac Mini
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>SOFTWARE</div>
                                                        Pro Tools,
                                                        Logic X,
                                                        Ableton Live 9
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>HARDWARE</div>
                                                        Antelope Audio Discrete 8 Interface
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>MONITORING</div>
                                                        Antelope Discrete 8 Interface,
                                                        Presonus HP4 Headphone Mixer,
                                                        Yamaha HS-10 Monitors
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>OUTBOARD</div>
                                                        Avalon 737 Black Pre-amp,
                                                        Antelope 8 channel Pre-amp,
                                                        <div className={'font-title h6 mt-3 mb-1 upper'}>MICROPHONES & DIRECT BOXES</div>
                                                        AKG c451b,
                                                        Antelope Audio Edge Solo,
                                                        Apex 360,
                                                        Audio Technica 4050 (x2),
                                                        Neumann TLM 67,
                                                        Radial ProD2,
                                                        Shure Beta 52,
                                                        Shure Beta 58,
                                                        Shure SM57 (x2),
                                                        Telefunken AR-51
                                                    </div>
                                                </Fragment>
                                            }
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                }
                {
                    page === 'floorplan' &&
                    <div className={'info-page pl-4 pr-4'}>
                        <div className={'row '}>
                            <div className={'col-12 pl-3 pr-3'}>
                                <FlipCard ref={r => this.nyGearFlipCard = r!} flipOnClick={'both'} className={'info-thumbnail-mobile color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                    childrenFront={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <div className={'h7 upper mt-3'}>FLOOR PLAN</div>
                                            <div className={'font-title h4 upper m-0 mb-3'}>NEW YORK</div>
                                            <img src="assets/floorplans/ny.png" alt="New York Floor Plan" className={'w-100'} />
                                            <div className={'font-title H7 upper m-0 mt-3 mb-3 color-medium'}>PRESS TO VIEW LOS ANGELES</div>
                                        </div>
                                    }
                                    childrenBack={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <div className={'h7 upper mt-3'}>FLOOR PLAN</div>
                                            <div className={'font-title h4 upper m-0 mb-3'}>LOS ANGELES</div>
                                            <img src="assets/floorplans/la.png" alt="Los Angeles Floor Plan" className={'w-100'} />
                                            <div className={'font-title H7 upper m-0 mt-3 mb-3 color-medium'}>PRESS TO VIEW NEW YORK</div>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                }
                {
                    page === 'history' &&
                    <div className={'info-page pl-4 pr-4'}>
                        <div className={'row '}>
                            <div className={'col-12 pl-3 pr-3'}>
                                <FlipCard ref={r => this.nyGearFlipCard = r!} flipOnClick={'both'} className={'info-thumbnail-mobile color-white btn-box animated w-100 d-flex flex-column justify-content-center align-items-center'}
                                    childrenFront={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                        <div className={'h7 upper mt-3'}>BREWERY RECORDING STUDIO</div>
                                        <div className={'font-title h4 upper m-0 mb-4'}>HISTORY</div>
                                            <img src="assets/history/team.jpg" alt="Team" className={'w-80'} />
                                            <div className={'font-title H7 upper m-0 mt-3 mb-3 color-medium'}>PRESS TO TIME TRAVEL</div>
                                        </div>
                                    }
                                    childrenBack={
                                        <div className={'w-100 h-100 d-flex flex-column justify-content-center align-items-center'}>
                                            <div className={'h7 upper mt-3'}>BREWERY RECORDING STUDIO</div>
                                            <div className={'font-title h4 upper m-0 mb-3'}>HISTORY</div>
                                            <div className={'pl-4 pr-4 h8'}>
                                                <p className={'lh-1.25 mt-2 mb-2'}>
                                                    Engineer Andrew Krivonos opened Southfall Studios in Park Slope, Brooklyn in 2005 as a mix room for his recording projects. Word of mouth spread immediately within three years, Andrew upgraded the studio to a new facility in an old microbrewery in Bushwick, changing its name to the Brewery Recording Studio.
                                                </p>
                                                <p className={'lh-1.25 mt-2 mb-2'}>
                                                    Meanwhile, producer Dot Da Genius was developing his own production company, Headbanga Muzik, with artist Kid Cudi out of his project studio in Brooklyn.
                                                </p>
                                                <p className={'lh-1.25 mt-2 mb-2'}>
                                                    Andrew and Dot joined to move the Brewery to its newest facility at 910 Grand Street in May 2009. Designed and constructed by the staff, the facility and its impressive engineers have quickly made the Brewery one of the highest profile studio environments in New York.
                                                </p>                                                
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

    private setPage = (page:InfoPage) => {
        this.setState({ page })
    }

    // Set the current room gear being viewed in NY
    private onNYGear = (room:'A'|'B'|'C') => {
        this.setState({ nyGearPage: room }, () => this.nyGearFlipCard.flip())
    }

    // Set the current room gear being viewed in LA
    private onLAGear = (room:'A'|'B') => {
        this.setState({ laGearPage: room }, () => this.laGearFlipCard.flip())
    }

    private getMobileHeight = () => $('.info-thumbnail-mobile').get().length > 0 ? $('.info-thumbnail-mobile').get()[0].clientWidth * 1.2 : 0
    private getSmallHeight = () => (DeviceUtil.getHeight() * Info.FULL_CARD_HEIGHT_PCT - 2 * Info.CARD_PADDING_PX) / 2
    private getLongHeight = () => DeviceUtil.getHeight() * Info.FULL_CARD_HEIGHT_PCT
    private getWideHeight = () => DeviceUtil.getHeight() * Info.FULL_CARD_HEIGHT_PCT

    private setDynamicBoxHeights = () => {
        $('.info-thumbnail-small').height(this.getSmallHeight())
        $('.info-thumbnail-long').height(this.getLongHeight())
        $('.info-thumbnail-wide').height(this.getWideHeight())
        $('.info-thumbnail-mobile').height(this.getMobileHeight())
    }

    private configureDragScrolling = () => {
        // Define mouse down events to set mouse location
        $("#services-mobile").mousedown((e) => {
            $("#services-mobile").children().css('pointer-events', 'none')
            e.preventDefault()
            const x = e.pageX
            const y = e.pageY
            const top = $("#services-mobile").scrollTop() || 0
            const left = $("#services-mobile").scrollLeft() || 0

            // Create mouse move events to enable drag scrolling
            $("#services-mobile").mousemove((e) => {
                e.preventDefault()
                $("#services-mobile").scrollTop(top - e.pageY + y)
                $("#services-mobile").scrollLeft(left - e.pageX + x)
            })
        })
        $("#gear-mobile").mousedown((e) => {
            $("#gear-mobile").children().css('pointer-events', 'none')
            e.preventDefault()
            const x = e.pageX
            const y = e.pageY
            const top = $("#gear-mobile").scrollTop() || 0
            const left = $("#gear-mobile").scrollLeft() || 0

            // Create mouse move events to enable drag scrolling
            $("#gear-mobile").mousemove((e) => {
                e.preventDefault()
                $("#gear-mobile").scrollTop(top - e.pageY + y)
                $("#gear-mobile").scrollLeft(left - e.pageX + x)
            })
        })
        $("#services-mobile").mouseup((e) => {
            $("#services-mobile").children().css('pointer-events', 'auto')
            $("#services-mobile").mousemove(() => false)
        })
        $("#gear-mobile").mouseup((e) => {
            $("#gear-mobile").children().css('pointer-events', 'auto')
            $("#gear-mobile").mousemove(() => false)
        })
    }

}