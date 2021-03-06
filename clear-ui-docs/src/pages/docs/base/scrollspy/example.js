import React from 'react'
import $ from 'jquery'

import {Scrollspy, ScrollspyAnchor} from 'clear-ui-base/lib/scrollspy'
import Button from 'clear-ui-web/lib/button/raisedButton'

export default class ScrollspyExample extends React.Component {
	constructor(props) {
		super(props)
		this.state = {anchor: undefined}
	}

	render() {
		let root = {
			height: 150,
			padding: '1rem',
			overflowY: 'scroll',
			border: '1px solid #eee'
		}

		let placeholder = {
			height: 150,
			background: '#eee',
			margin: '1rem 0'
		}

		let deferred = $.Deferred()

		return <div>
			Current anchor id: <b>{this.state.anchor}</b>{' '}
			<Button onTap={() => { this.refs.scrollspy.scrollToAnchor('2') }}>
				Scroll to second
			</Button>

			<br/><br/>

			<div ref={(elem) => { deferred.resolve(elem) }} style={root}>
				<Scrollspy ref='scrollspy' container={deferred}
					onChange={(id) => { this.setState({anchor: id}) }}>
					<ScrollspyAnchor id='1'>First</ScrollspyAnchor>
					<div style={placeholder}/>
					<ScrollspyAnchor id='2'>Second</ScrollspyAnchor>
					<div style={placeholder}/>
					<ScrollspyAnchor id='3'>Third</ScrollspyAnchor>
					<div style={placeholder}/>
				</Scrollspy>
			</div>
		</div>
	}
}

