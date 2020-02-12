import AWS from 'aws-sdk'
import React from 'react'
import './App.css'
import { Icon, IconName, LogoName } from './components'
import logo from './logo.svg'

AWS.config.update({
	region: process.env.AWS_REGION,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

export const DynamoDB = new AWS.DynamoDB()

const App = () => {
	return (
		<div className="App container">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
          <Icon name={IconName.Facebook} width={80} height={80} />
          <Icon name={LogoName.BLogo} width={80} height={80} />
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
