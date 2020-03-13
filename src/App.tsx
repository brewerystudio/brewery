import AWS from 'aws-sdk'
import React from 'react'
import './App.css'
import { NavigationBar, Background, BackgroundName } from './components'
import ReactFullpage from '@fullpage/react-fullpage'
import { Route } from './interfaces'
import { Home } from './pages';

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

const App = () => {
	return (
		<div className="App container-fluid p-0">
			<Background backgroundName={BackgroundName.Landing} position={'fixed'} />
			<NavigationBar
				items={ROUTES}
			/>
			<div style={{ overflow: 'hidden' }}>
				<ReactFullpage
					licenseKey={'YOUR_KEY_HERE'}
					scrollingSpeed = {1000}
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
		</div>
	)
}

export default App
