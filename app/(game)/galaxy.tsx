import { ImageBackground, Text } from 'react-native'

import galaxy_bg from '@/assets/images/bg/galaxy_bg.jpg'

export default function Galaxy() {
	return (
		<ImageBackground source={galaxy_bg} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Candy Component</Text>
		</ImageBackground>
	)
}
