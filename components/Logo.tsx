import { Image, StyleSheet } from 'react-native'

import mini_logo from '@/assets/images/logo/mini_logo.png'

export default function Logo() {
	return (
		<Image
			source={mini_logo}
			alt='my mind image'
			resizeMode='cover'
			style={styles.logo}
		/>
	)
}

const styles = StyleSheet.create({
	logo: {
		width: 62,
		height: 39,
	},
})
