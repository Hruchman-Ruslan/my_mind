import { ImageBackground, Text } from 'react-native'

import dogs_bg from '@/assets/images/bg/dogs_bg.jpg'

export default function Dogs() {
	return (
		<ImageBackground source={dogs_bg} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Dogs Component</Text>
		</ImageBackground>
	)
}
