import AWS from 'aws-sdk'
import React, { Component } from 'react'
import { NavigationBar, Background, BackgroundName } from './components'
import ReactFullpage from '@fullpage/react-fullpage'
import { Route } from './interfaces'
import { Home, Gallery, Clients, Engineers, Info } from './pages'
import { colors, shouts } from './constants'
import { Navigation, Shout } from './utils'
import './styles/app.sass'

AWS.config.update({
	region: process.env.AWS_REGION,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

export const DynamoDB = new AWS.DynamoDB()

export const ROUTES:Route[] = [
    {
        title: 'Home',
        url: '/home',
        component: <Home />
    },
    {
        title: 'Gallery',
        url: '/gallery',
        component: <Gallery />
    },
    {
        title: 'Clients',
        url: '/clients',
        component: <Clients />
    },
    {
        title: 'Engineers',
        url: '/engineers',
        component: <Engineers />
    },
    {
        title: 'Info',
        url: '/info',
        component: <Info />
    }
]

export class App extends Component {

	private fullPage!:any
	private bg!:Background

	public state = {
		navbarHeight: 0,
	}
	
	public render = () => {
		const paddingTop = (this.state as any).navbarHeight
		return (
			<div className={"App container-fluid p-0 d-flex flex-row justify-content-stretch"}>
				<Background ref={r => this.bg = r!} initialBackgroundName={BackgroundName.Landing} position={'fixed'} overlayColor={colors.black} overlayOpacity={0.5} />
				<NavigationBar
					items={ROUTES}
					onResize={this.onNavbarResize}
				/>
				<ReactFullpage
					licenseKey={'YOUR_KEY_HERE'}
					scrollingSpeed = {1000}
					paddingTop={paddingTop}
					onLeave={this.onLeave}
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
								{
									ROUTES.map((route:Route, idx:number) => (
										<div key={`pg-${idx}`} className={'section'}>
											<div className={'h-100 d-flex flex-row align-items-center justify-content-stretch'}>
												{ route.component }
											</div>
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

	private onNavbarResize = (width:number, height:number) => {
		this.setState({ navbarHeight: height })
	}

	private onLeave = (origin:any, destination:any, direction:'up'|'down') => {
						
		// Change background
		if ((destination.index === 1) || (origin.index === 1 && destination.index === 2)) {
			this.bg.changeBackgroundName(BackgroundName.Microphone)
		} else if (destination.index === 1) {
			this.bg.changeBackgroundName(BackgroundName.Landing)
		} else if (destination.index === 3) {
			this.bg.changeBackgroundName(BackgroundName.Table)
		} else if (destination.index === 4) {
			this.bg.changeBackgroundName(BackgroundName.Lounge)
		}

	}

	private moveToPageInPath = () => {
		if (!this.fullPage) {
			return
		}
		const path = Navigation.getPath()
		let index = -1
		for (let i = 0; i < ROUTES.length; i++) {
			const route = ROUTES[i]
			if (route.url.includes(path)) {
				index = i
				break
			}
		}
		if (index >= 0) {
			this.fullPage.silentMoveTo(index + 1)
		}
	}

	public toggleScrolling = (to:boolean) => {
		if (!this.fullPage) {
			return
		}
		this.fullPage.setAllowScrolling(to)
	}

}

export default App
