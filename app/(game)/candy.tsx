import { ImageBackground, Text } from 'react-native'

import candy_bg from '@/assets/images/bg/candy_bg.jpg'

export default function Candy() {
	return (
		<ImageBackground source={candy_bg} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Candy Component</Text>
		</ImageBackground>
	)
}
