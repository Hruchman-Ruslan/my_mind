import { ImageBackground, Text } from 'react-native'

import tiger_bg from '@/assets/images/bg/tiger_bg.jpg'

export default function Tiger() {
	return (
		<ImageBackground source={tiger_bg} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Tiger Component</Text>
		</ImageBackground>
	)
}
