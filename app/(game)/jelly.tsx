import { ImageBackground, Text } from 'react-native'

import felly_bg from '@/assets/images/bg/jelly_bg.jpg'

export default function Jelly() {
	return (
		<ImageBackground source={felly_bg} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Jelly Component</Text>
		</ImageBackground>
	)
}
