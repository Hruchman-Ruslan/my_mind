import { ImageBackground, Text } from 'react-native'

import zeus_bg from '@/assets/images/bg/zeus_bg.jpg'

export default function Zeus() {
	return (
		<ImageBackground source={zeus_bg} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Zeus Component</Text>
		</ImageBackground>
	)
}
