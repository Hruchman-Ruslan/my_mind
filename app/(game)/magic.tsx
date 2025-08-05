import { ImageBackground, Text } from 'react-native'

import magic_bg from '@/assets/images/bg/magic_bg.jpg'

export default function Magic() {
	return (
		<ImageBackground source={magic_bg} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Magic Component</Text>
		</ImageBackground>
	)
}
