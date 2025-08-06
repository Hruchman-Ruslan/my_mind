import { Image, StyleSheet } from 'react-native'

import HeartImage from '@/assets/images/svg/heart.png'

export default function Heart() {
	return <Image source={HeartImage} alt='heart' style={styles.mini_logo} />
}

const styles = StyleSheet.create({
	mini_logo: {
		width: 32,
		height: 30,
	},
})
