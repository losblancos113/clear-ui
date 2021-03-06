import React from 'react'
import {Notification, StackingNotificationContainer} from 'clear-ui-web/lib/notification'
import RaisedButton from 'clear-ui-web/lib/button/raisedButton.js'

export default class NotificationExample extends React.Component {
	state = {}

	render() {
		return <span>
			<RaisedButton onTap={() => { this.setState({open: true}) }}>
				Show notification
			</RaisedButton>
			<StackingNotificationContainer>
				<Notification
					open={this.state.open}
					onClose={() => { this.setState({open: false}) }}
				>
					Notification text
				</Notification>
			</StackingNotificationContainer>
		</span>
	}
}
