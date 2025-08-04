import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from 'react-native'

import * as NavigationBar from 'expo-navigation-bar'

import bg_2 from '../../assets/images/bg_2.jpg'

import MyMindLogo from './MyMindLogo'

import { useEffect } from 'react'

export default function Game() {
	useEffect(() => {
		NavigationBar.setVisibilityAsync('hidden')

		return () => {
			NavigationBar.setVisibilityAsync('visible')
		}
	}, [])

	return (
		<>
			<StatusBar hidden={true} />
			<ImageBackground source={bg_2} style={{ flex: 1 }} resizeMode='cover'>
				<View style={styles.container}>
					<View style={styles.box}>
						<MyMindLogo />
						<TouchableOpacity style={styles.button}>
							<Text style={styles.startText}>Start</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 257,
		paddingRight: 72,
		paddingBottom: 90,
		paddingLeft: 73,
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
	},
	startText: {
		color: '#FFFFFF',
		textAlign: 'center',
		fontFamily: 'Baloo2',
		fontSize: 24,
		fontStyle: 'normal',
		fontWeight: '400',
		letterSpacing: 1,
		textTransform: 'uppercase',
	},
})
