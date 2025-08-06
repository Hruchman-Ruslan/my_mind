import {
	View,
	ImageBackground,
	StyleSheet,
	StatusBar,
	Image,
} from 'react-native'

import { Link } from 'expo-router'

import useHideNavigationBar from '@/hooks/useHideNavigationBar'

import bg_2 from '@/assets/images/bg/bg_2.jpg'

import logo from '@/assets/images/logo/logo.png'

export default function StartGame() {
	useHideNavigationBar()

	return (
		<>
			<StatusBar hidden={true} />
			<ImageBackground source={bg_2} style={{ flex: 1 }} resizeMode='cover'>
				<View style={styles.container}>
					<View style={styles.box}>
						<Image source={logo} alt='logo' />
						<Link style={styles.button} href={'/game'}>
							Start
						</Link>
					</View>
				</View>
			</ImageBackground>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 257,
		paddingBottom: 90,
	},
	box: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		width: 160,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#43BCF0',
		backgroundColor: '#6EBCF7',

		elevation: 5,

		shadowColor: 'rgba(255, 255, 255, 0.25)',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 5,

		color: '#FFFFFF',
		textAlign: 'center',
		fontFamily: 'Ballo2',
		fontSize: 24,

		letterSpacing: 1,
		textTransform: 'uppercase',
	},
})
