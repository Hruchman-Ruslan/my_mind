import { ImageBackground, Text } from 'react-native'

import bg_3 from '../../assets/images/bg_3.jpg'

import useHideNavigationBar from '@/hooks/useHideNavigationBar'

export default function GamePage() {
	useHideNavigationBar()

	return (
		<ImageBackground source={bg_3} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Game Page</Text>
		</ImageBackground>
	)
}
