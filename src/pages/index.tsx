import React, { Component } from "react"
// import { graphql } from 'gatsby'
import { Engineer, StudioGallery, StudioGear, BookingPriceTable, Route } from "../interfaces"
import { Background, BackgroundName, NavigationBar } from "../components"
import { Navigation, Shout } from "../utils"
import { colors, shouts } from "../constants"
import { Booking, Clients, Contact, Engineers, Gallery, Home, Info } from "../templates"
import ReactFullpage from '@fullpage/react-fullpage'
import '../styles/app.sass'

const fpWrapperOverrideStyles = (
	<style dangerouslySetInnerHTML={{__html: `
		.fp-tableCell {
			display: flex !important;
			align-items: center !important;
			height: 100% !important;
		}
	`}} />
)

export class App extends Component {

	private fullPage!:any
	private bg!:Background

	private engineers!: Engineer[]
	private clients!: string[]
	private studioGalleries!: StudioGallery[]
	private studioGear!: StudioGear[]
	private bookingPriceTable!: BookingPriceTable
	private routes!: Route[]

	public state = {
		navbarHeight: 0,
		currentRoute: null,
	}

	constructor (props: any) {
		super(props)
		this.engineers = this.getEngineers()
		this.clients = this.getClients()
		this.studioGalleries = this.getStudioGalleries()
		this.studioGear = this.getStudioGear()
		this.bookingPriceTable = this.getBookingPriceTable()
		this.routes = [
			{
				title: 'Home',
				url: '/home',
				component: <Home />
			},
			{
				title: 'Gallery',
				url: '/gallery',
				component: <Gallery galleries={this.studioGalleries} />
			},
			{
				title: 'Clients',
				url: '/clients',
				component: <Clients clients={this.clients} />
			},
			{
				title: 'Engineers',
				url: '/engineers',
				component: <Engineers engineers={this.engineers} />
			},
			{
				title: 'Info',
				url: '/info',
				component: <Info gear={this.studioGear} />
			},
			{
				title: 'Booking',
				url: '/booking',
				component: <Booking priceTable={this.bookingPriceTable} />
			},
			{
				title: 'Contact',
				url: '/contact',
				component: <Contact />
			}
		]
	}

	public render = () => {
		const paddingTop = (this.state as any).navbarHeight
		return (
			<div className={"App container-fluid p-0 d-flex flex-row justify-content-stretch"}>
				<Background ref={r => this.bg = r!} initialBackgroundName={BackgroundName.Landing} position={'fixed'} overlayColor={colors.black} overlayOpacity={0.7} />
				<NavigationBar
					items={this.routes}
					currentItem={this.state.currentRoute}
					onResize={this.onNavbarResize}
				/>
				<ReactFullpage
					licenseKey={'YOUR_KEY_HERE'}
					scrollingSpeed = {1000}
					paddingTop={paddingTop}
					onLeave={this.onLeave}
					normalScrollElements={'.normal-scroll'}
					render={(props:any) => {
						const { fullpageApi } = props
						if (fullpageApi) {
							this.fullPage = fullpageApi
							// Subscribe to page scroll events
							Shout.subscribe(shouts.PAGE_SCROLL_ON, () => this.toggleScrolling(true))
							Shout.subscribe(shouts.PAGE_SCROLL_OFF, () => this.toggleScrolling(false))
						}
						return (
							<ReactFullpage.Wrapper>
								{fpWrapperOverrideStyles}
								{
									this.routes.map((route:Route, idx:number) => (
										<div key={`pg-${idx}`} className={'section'} style={{ paddingTop }}>
											{ route.component }
										</div>
									))
								}
							</ReactFullpage.Wrapper>
						)
					}}
					afterRender={() => setTimeout(this.moveToPageInPath, 1)}
				/>
			</div>
		)
	}

	private onNavbarResize = (_: number, height: number) => {
		if (this.state.navbarHeight !== height) {
			this.setState({ navbarHeight: height })
		}
	}

	private makeTitle = (pageName: string) => `Brewery Recording – ${pageName}`

	private onLeave = (origin:any, destination:any, direction:'up'|'down') => {
		const route = this.routes[destination.index]

		this.setState({ currentRoute: route })
		Navigation.go(route.url, null, true, this.makeTitle(route.title))
						
		// Change background
		if (destination.index === 0) {
			this.bg.changeBackgroundName(BackgroundName.Table)
		} else if ((destination.index === 1) || (origin.index === 1 && destination.index === 2)) {
			this.bg.changeBackgroundName(BackgroundName.Microphone)
		} else if (destination.index === 1) {
			this.bg.changeBackgroundName(BackgroundName.Landing)
		} else if (destination.index === 3) {
			this.bg.changeBackgroundName(BackgroundName.Table)
		} else if (destination.index === 4) {
			this.bg.changeBackgroundName(BackgroundName.LoungeNY)
		} else if (destination.index === 5) {
			this.bg.changeBackgroundName(BackgroundName.LoungeLA)
		} else if (destination.index === 6) {
			this.bg.changeBackgroundName(BackgroundName.LoungeLA)
		}
	}

	private moveToPageInPath = () => {
		if (!this.fullPage) {
			return
		}
		const path = Navigation.getPath()
		let index = -1
		for (let i = 0; i < this.routes.length; i++) {
			if (this.routes[i].url.includes(path)) {
				index = i
				break
			}
		}
		const route = this.routes[index]
		if (index >= 0) {
			this.setState({ currentRoute: route })
			Navigation.setTitle(this.makeTitle(route.title))
			this.fullPage.silentMoveTo(index + 1)
		}
	}

	public toggleScrolling = (to:boolean) => {
		if (!this.fullPage) {
			return
		}
		this.fullPage.setAllowScrolling(to)
	}

	public getEngineers = (): Engineer[] => {
		return []
	}

	public getClients = (): string[] => {
		return []
	}

	public getStudioGalleries = (): StudioGallery[] => {
		return []
	}

	public getStudioGear = (): StudioGear[] => {
		return []
	}

	public getBookingPriceTable = (): BookingPriceTable => {
		return {
			withEngineerPrices: {},
			withProducerPrices: {},
			withAssistantPrices: {},
			specials: [{ name: 'Special', schedule: 'Sometimes', caption: 'w/ Engineer' }],
		}
	}

}

// export const pageQuery = graphql`
//     query {
//         allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {templateKey: {eq: "article"}}}) {
//             edges {
//                 node {
//                     frontmatter {
//                         caption
//                         date
//                         subtitle
//                         tags
//                         templateKey
//                         title
//                         image {
//                             publicURL
//                         }
//                     }
// 					fields {
// 					  slug
// 					}
//                 }
//             }
//         }
//     }
// `

export default App