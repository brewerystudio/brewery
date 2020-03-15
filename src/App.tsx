import AWS from 'aws-sdk'
import React, { Component } from 'react'
import { NavigationBar, Background, BackgroundName } from './components'
import ReactFullpage from '@fullpage/react-fullpage'
import { Route } from './interfaces'
import { Home } from './pages';
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
    }
]

export class App extends Component {

	public state = {
		navbarHeight: 0 
	}
	
	public render = () => {
		const paddingTop = (this.state as any).navbarHeight
		return (
			<div className={"App container-fluid p-0 d-flex flex-column justify-content-stretch"}>
				<Background backgroundName={BackgroundName.Landing} position={'fixed'} overlayColor={colors.black} overlayOpacity={0.5} />
				<NavigationBar
					items={ROUTES}
					onResize={this.onNavbarResize}
				/>
				<ReactFullpage
					licenseKey={'YOUR_KEY_HERE'}
					scrollingSpeed = {1000}
					paddingTop={paddingTop}
					render={(props:any) => {
						// const { state, fullpageApi } = props
						return (
							<ReactFullpage.Wrapper>
								{
									ROUTES.map((route:Route, idx:number) => (
										<div key={`pg-${idx}`} className="section">
											{ route.component }
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

}

export default App
