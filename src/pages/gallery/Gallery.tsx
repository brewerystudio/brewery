import React from 'react'
import { Page } from '../Page'
import './Gallery.sass'

export class Gallery extends Page {

    private mainCarousel!:HTMLDivElement
    private caption!:HTMLDivElement
    private captionSmall!:HTMLDivElement

    // TODO: change to dynamic data
    private images = [
        // NY Room A
        { src: 'ny_room_a_1.jpg', caption: 'New York\nRoom A' },
        { src: 'ny_room_a_2.jpg', caption: 'New York\nRoom A' },
        { src: 'ny_room_a_3.jpg', caption: 'New York\nRoom A' },
        { src: 'ny_room_a_4.jpg', caption: 'New York\nRoom A' },
        { src: 'ny_room_a_5.jpg', caption: 'New York\nRoom A' },
        // NY Lounge A
        { src: 'ny_room_a_6.jpg', caption: 'New York\nLounge A' },
        // NY Room B
        { src: 'ny_room_b_1.jpg', caption: 'New York\nRoom B' },
        { src: 'ny_room_b_2.jpg', caption: 'New York\nRoom B' },
        { src: 'ny_room_b_3.jpg', caption: 'New York\nRoom B' },
        { src: 'ny_room_b_4.jpg', caption: 'New York\nRoom B' },
        { src: 'ny_room_b_5.jpg', caption: 'New York\nRoom B' },
        // NY Lounge B
        { src: 'ny_room_b_6.jpg', caption: 'New York\nLounge B' },
        // NY Room C
        { src: 'ny_room_c_1.jpg', caption: 'New York\nRoom C' },
        { src: 'ny_room_c_2.jpg', caption: 'New York\nRoom C' },
        { src: 'ny_room_c_3.jpg', caption: 'New York\nRoom C' },
        { src: 'ny_room_c_4.jpg', caption: 'New York\nRoom C' },
        { src: 'ny_room_c_5.jpg', caption: 'New York\nRoom C' },
        // LA Room A
        { src: 'la_room_a_1.jpg', caption: 'Los Angeles\nRoom A' },
        { src: 'la_room_a_2.jpg', caption: 'Los Angeles\nRoom A' },
        { src: 'la_room_a_3.jpg', caption: 'Los Angeles\nRoom A' },
        { src: 'la_room_a_4.jpg', caption: 'Los Angeles\nRoom A' },
        { src: 'la_room_a_5.jpg', caption: 'Los Angeles\nRoom A' },
        // LA Lounge A
        { src: 'la_room_a_6.jpg', caption: 'Los Angeles\nLounge A' },
        // LA Room B
        { src: 'la_room_b_1.jpg', caption: 'Los Angeles\nRoom B' },
        { src: 'la_room_b_2.jpg', caption: 'Los Angeles\nRoom B' },
        { src: 'la_room_b_3.jpg', caption: 'Los Angeles\nRoom B' },
        { src: 'la_room_b_4.jpg', caption: 'Los Angeles\nRoom B' },
        { src: 'la_room_b_5.jpg', caption: 'Los Angeles\nRoom B' },
        // LA Lounge B
        { src: 'la_room_b_6.jpg', caption: 'Los Angeles\nLounge B' }
    ]

    componentDidMount = () => {
        ($("#carousel") as any).carousel()
        $("#carousel").on('slid.bs.carousel', () => {
            const idx = $(document).find('.carousel-item.active').index()
            const caption = this.images[idx].caption.toUpperCase()
            this.caption.innerHTML = caption.replace('\n', '<br>')
            this.captionSmall.innerHTML = caption.replace('\n', ' | ')
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
                                this.images.map((image, i) => (
                                    <div key={`carousel-${i}`} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                        <img src={`assets/gallery/${image.src}`} className={"gallery-main-img"} alt={image.caption.replace('\n', '')} />
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
                                this.images.map((image, i) => (
                                    <div key={`carousel-${i}`} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                        <img src={`assets/gallery/${image.src}`} className={"gallery-main-img"} alt={image.caption.replace('\n', '')} />
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
                <div onMouseOver={this.hideOverlay} onMouseOut={this.showOverlay} ref={r => this.caption = r!} className={'animated-slow gallery-main-caption color-white font-title h1 text-center'} />
                <div ref={r => this.captionSmall = r!} className={'animated shadow-font gallery-main-caption-small color-white font-title h5 text-left'} />
                <div className={'gallery-main-bg bg-black'} />
            </div>
        )
    }

    private setImage = (idx:number) => {
        ($("#carousel") as any).carousel(idx)
        const caption = this.images[idx].caption.toUpperCase()
        if (this.caption && this.captionSmall) {
            this.caption.innerHTML = caption.replace('\n', '<br>')
            this.captionSmall.innerHTML = caption.replace('\n', ' | ')
        }
    }

    private hideOverlay = () => {
        this.mainCarousel.style.opacity = '0.9'
        this.caption.style.opacity = '0'
        this.captionSmall.style.opacity = '1'
    }

    private showOverlay = () => {
        this.mainCarousel.style.opacity = '0.6'
        this.caption.style.opacity = '1'
        this.captionSmall.style.opacity = '0'
    }

}