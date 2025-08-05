import { ImageBackground, Text } from 'react-native'

import robots_bg from '@/assets/images/bg/robots_bg.jpg'

export default function Robots() {
	return (
		<ImageBackground source={robots_bg} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Robots Component</Text>
		</ImageBackground>
	)
}
