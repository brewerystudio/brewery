import React from 'react'
import { Image } from '../../components'
import { isBrowser } from '../../constants'
import { GalleryImage, Studio, StudioGallery, STUDIO_TO_NAME_MAP } from '../../interfaces'
import { Page } from '../Page'
import './Gallery.sass'


interface GalleryProps {
    galleries: StudioGallery[]
}

export class Gallery extends Page<GalleryProps> {

    private mainCarousel!:HTMLDivElement
    private caption!:HTMLDivElement
    private captionSmall!:HTMLDivElement

    private studios: StudioGallery[] = [
        {
            studio: 'NewYork',
            images: [
                // NY Room A
                { src: 'ny_room_a_1.jpg', caption: 'Room A' },
                { src: 'ny_room_a_2.jpg', caption: 'Room A' },
                { src: 'ny_room_a_3.jpg', caption: 'Room A' },
                { src: 'ny_room_a_4.jpg', caption: 'Room A' },
                { src: 'ny_room_a_5.jpg', caption: 'Room A' },
                // NY Lounge A
                { src: 'ny_room_a_6.jpg', caption: 'Lounge A' },
                // NY Room B
                { src: 'ny_room_b_1.jpg', caption: 'Room B' },
                { src: 'ny_room_b_2.jpg', caption: 'Room B' },
                { src: 'ny_room_b_3.jpg', caption: 'Room B' },
                { src: 'ny_room_b_4.jpg', caption: 'Room B' },
                { src: 'ny_room_b_5.jpg', caption: 'Room B' },
                // NY Lounge B
                { src: 'ny_room_b_6.jpg', caption: 'Lounge B' },
                // NY Room C
                { src: 'ny_room_c_1.jpg', caption: 'Room Room C' },
                { src: 'ny_room_c_2.jpg', caption: 'Room C' },
                { src: 'ny_room_c_3.jpg', caption: 'Room C' },
                { src: 'ny_room_c_4.jpg', caption: 'Room C' },
                { src: 'ny_room_c_5.jpg', caption: 'Room C' },
            ],
        },
        {
            studio: 'LosAngeles',
            images: [
                // LA Room A
                { src: 'la_room_a_1.jpg', caption: 'Room A' },
                { src: 'la_room_a_2.jpg', caption: 'Room A' },
                { src: 'la_room_a_3.jpg', caption: 'Room A' },
                { src: 'la_room_a_4.jpg', caption: 'Room A' },
                { src: 'la_room_a_5.jpg', caption: 'Room A' },
                // LA Lounge A
                { src: 'la_room_a_6.jpg', caption: 'Lounge A' },
                // LA Room B
                { src: 'la_room_b_1.jpg', caption: 'Room B' },
                { src: 'la_room_b_2.jpg', caption: 'Room B' },
                { src: 'la_room_b_3.jpg', caption: 'Room B' },
                { src: 'la_room_b_4.jpg', caption: 'Room B' },
                { src: 'la_room_b_5.jpg', caption: 'Room B' },
                // LA Lounge B
                { src: 'la_room_b_6.jpg', caption: 'Lounge B' },
            ],
        },
    ]
    private allImages!: (GalleryImage & { studio: Studio })[]

    constructor(props: any) {
        super(props)
        this.allImages = []
        for (const studio of this.studios) {
            for (const image of studio.images) {
                this.allImages.push({...image, studio: studio.studio})
            }
        }
    }

    componentDidMount = () => {
        ($("#carousel") as any).carousel()
        $("#carousel").on('slid.bs.carousel', () => {
            const idx = isBrowser ? $(document).find('.carousel-item.active').index() : -1
            if (idx >= 0) {
                const caption = this.allImages[idx].caption.toUpperCase()
                const studio = STUDIO_TO_NAME_MAP[this.allImages[idx].studio].toUpperCase()
                this.caption && (this.caption.innerHTML = `${studio}<br/>${caption}`)
                this.captionSmall.innerHTML = `${studio} | ${caption}`
            }
        })
        this.setImage(0)
    }

    public renderDesktop = () => {
        return (
            <div className={'wrapper h-100'}>
                <div className={'d-flex align-items-stretch unselectable'}>
                    <div id="carousel" ref={r => this.mainCarousel = r!} onMouseOver={this.hideOverlay} onMouseOut={this.showOverlay} className={'carousel slide gallery-main-carousel animated-slow'} data-ride="carousel">
                        <div className={"carousel-inner"}>
                            {
                                this.allImages.map((image, i) => (
                                    <div key={`carousel-${i}`} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                        <Image src={`assets/gallery/${image.src}`} className={"gallery-main-img"} alt={image.caption.replace('\n', '')} />
                                    </div>
                                ))
                            }
                        </div>
                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div onMouseOver={this.hideOverlay} onMouseOut={this.showOverlay} ref={r => this.caption = r!} className={'animated-slow gallery-main-caption color-white font-title h1 display-4 text-center'} />
                <div ref={r => this.captionSmall = r!} className={'animated shadow-font gallery-main-caption-small color-white font-title h5 text-left'} />
                <div className={'gallery-main-bg bg-black'} />
            </div>
        )
    }

    public renderMobile = () => {
        return (
            <div className={'wrapper h-100'}>
                <div className={'d-flex align-items-stretch unselectable'}>
                    <div id="carousel" ref={r => this.mainCarousel = r!} onMouseOver={this.hideOverlay} onMouseOut={this.showOverlay} className={'carousel slide gallery-main-carousel animated-slow'} data-ride="carousel">
                        <div className={"carousel-inner"}>
                            {
                                this.allImages.map((image, i) => (
                                    <div key={`carousel-${i}`} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                        <Image src={`assets/gallery/${image.src}`} className={"gallery-main-img"} alt={image.caption.replace('\n', '')} />
                                    </div>
                                ))
                            }
                        </div>
                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div ref={r => this.captionSmall = r!} className={'animated shadow-font gallery-main-caption-small color-white font-title h5 text-left'} />
                <div className={'gallery-main-bg bg-black'} />
            </div>
        )
    }

    private setImage = (idx:number) => {
        ($("#carousel") as any).carousel(idx)
        const caption = this.allImages[idx].caption.toUpperCase()
        if (this.caption) {
            this.caption.innerHTML = caption.replace('\n', '<br>')
        }
        if (this.captionSmall) {
            this.captionSmall.innerHTML = caption.replace('\n', ' | ')
        }
    }

    private hideOverlay = () => {
        this.mainCarousel.style.opacity = '0.9'
        this.caption && (this.caption.style.opacity = '0')
        this.captionSmall.style.opacity = '1'
    }

    private showOverlay = () => {
        this.mainCarousel.style.opacity = '0.6'
        this.caption && (this.caption.style.opacity = '1')
        this.captionSmall.style.opacity = '0'
    }

}