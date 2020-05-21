import AWS from 'aws-sdk'
import React, { Component } from 'react'
import { NavigationBar, Background, BackgroundName } from './components'
import ReactFullpage from '@fullpage/react-fullpage'
import { Route } from './interfaces'
import { Home, Gallery, Clients, Engineers } from './pages'
import { colors } from './constants'
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
    }
]

export class App extends Component {

	public state = {
		navbarHeight: 0,
		background: BackgroundName.Landing,
	}
	
	public render = () => {
		const paddingTop = (this.state as any).navbarHeight
		return (
			<div className={"App container-fluid p-0 d-flex flex-row justify-content-stretch"}>
				<Background backgroundName={this.state.background} position={'fixed'} overlayColor={colors.black} overlayOpacity={0.5} />
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
						// const { state, fullpageApi } = props
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
				/>
			</div>
		)
	}

	private onNavbarResize = (width:number, height:number) => {
		this.setState({ navbarHeight: height })
	}

	private onLeave = (origin:any, destination:any, direction:'up'|'down') => {
						
		// Change background
		if ((origin.index === 0 && destination.index === 1) || (origin.index === 1 && destination.index === 2)) {
			setTimeout(() => this.setState({ background: BackgroundName.Microphone }), 1000)
		} else if (origin.index === 2 && destination.index === 1) {
			setTimeout(() => this.setState({ background: BackgroundName.Landing }), 1000)
		} else if (origin.index === 2 && destination.index === 3) {
			setTimeout(() => this.setState({ background: BackgroundName.Table }), 1000)
		}

	}

}

export default App
