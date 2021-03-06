import React from 'react'

//import Page from 'clear-ui-doc/lib/page'
//import Header from 'clear-ui-doc/lib/header'

import ZContext from 'clear-ui-base/lib/zContext'
import Page from '../page'
import Header, {HeaderItem} from '../header'

class App extends React.Component {
	render() {
		let flex = {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100%'
		}

		let content = {
			flexGrow: 1,
			position: 'relative'
		}

		let blue600 = '#1E88E5'

		return (
			<ZContext>
				<div style={flex}>
					<Header title='Clear UI' color={blue600}>
						<HeaderItem link='/' onlyIndex>Clear UI</HeaderItem>
						<HeaderItem link='/docs/'>Documentation</HeaderItem>
						<HeaderItem
							link='https://github.com/clear-ui/clear-ui'
							external
							target='_blank'
							style={{float: 'right'}}
						>
							Github
						</HeaderItem>
					</Header>
					<div style={content}>
						{this.props.children}
					</div>
				</div>
			</ZContext>
		)
	}
}

//import Main from './pages/main'
//import Usage from './pages/usage'

import Index from '../pages/index'
import Docs from '../pages/docs'
import GetStarted from '../pages/docs/getStarted'
import Customization from '../pages/docs/customization'
import BaseComponentsRoutes from './baseComponents'
import WebComponentsRoutes from './webComponents'
import MaterialComponentsRoutes from './materialComponents'

export default {
	path: '/',
	component: App,
	indexRoute: {component: Index},
	childRoutes: [
		{
			path: 'docs',
			component: Docs,
			childRoutes: [
				{
					path: 'get-started',
					component: GetStarted
				},
				{
					path: 'customization',
					component: Customization
				},
				{
					path: 'base',
					childRoutes: BaseComponentsRoutes
				},
				{
					path: 'material',
					childRoutes: MaterialComponentsRoutes
				},
				{
					path: 'web',
					childRoutes: WebComponentsRoutes
				}
			]
		}
	]
}
