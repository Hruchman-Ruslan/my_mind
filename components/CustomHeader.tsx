import { SafeAreaView, ImageBackground, StyleSheet } from 'react-native'

import rectangle_3 from '../assets/images/rectangle_3.jpg'

import { ReactNode } from 'react'

interface CustomerHeaderProps {
	left?: ReactNode
	center?: ReactNode
	right?: ReactNode
}

export default function CustomHeader({
	left,
	center,
	right,
}: CustomerHeaderProps) {
	return (
		<ImageBackground source={rectangle_3} style={styles.bg} resizeMode='cover'>
			<SafeAreaView style={styles.container}>
				<>{left}</>
				<>{center}</>
				<>{right}</>
			</SafeAreaView>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	bg: {
		height: 102,
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'space-between',
		paddingHorizontal: 25,
		paddingBottom: 10,
	},
})
