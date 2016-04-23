import React from 'react'

import BaseScrollMenu from 'clear-ui-base/lib/menu/scrollMenu'
import isSameOrInheritedType from 'clear-ui-base/lib/utils/isSameOrInheritedType'
import transferProps from 'clear-ui-base/lib/utils/transferProps'

import MenuItem from './item'

class Menu extends BaseScrollMenu {
	static defaultProps = {
		itemType: MenuItem
	}

	static styles = (props) => {
		return {
			root: {
				padding: props.desktop ? '16px 0' : '8px 0'
			}
		}
	}

	processItems(items, level) {
		let processedItems = super.processItems(items, level)
		return React.Children.map(processedItems, (elem) => {
			if (isSameOrInheritedType(elem.type, MenuItem)) {
				return transferProps(this, elem, ['desktop'])
			} else {
				return elem
			}
		})
	}
}

export default Menu
export {MenuItem}
