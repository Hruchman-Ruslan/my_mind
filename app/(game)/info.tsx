import { ImageBackground, Text } from 'react-native'

import bg_1 from '../../assets/images/bg_1.jpg'

export default function InfoPage() {
	return (
		<ImageBackground source={bg_1} style={{ flex: 1 }} resizeMode='cover'>
			<Text>Info Page</Text>
		</ImageBackground>
	)
}
