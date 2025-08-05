import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import bg_1 from '@/assets/images/bg/bg_1.jpg'

export default function InfoPage() {
	return (
		<ImageBackground source={bg_1} style={{ flex: 1 }} resizeMode='cover'>
			<View style={styles.container}>
				<Text style={styles.heading}>Rules</Text>
				<Text style={styles.paragraph}>
					Lorem ipsum dolor sit amet consectetur. A ut sit pellentesque vel. Sit
					tincidunt praesent adipiscing in magna erat enim nec urna. Aliquet
					volutpat id arcu fames varius mus ultricies mollis. Adipiscing blandit
					cursus faucibus vel ullamcorper dignissim at...
				</Text>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		paddingHorizontal: 25,
	},
	heading: {
		fontFamily: 'BalloSemiBold',
		fontSize: 22,
		color: '#FFF',
		textAlign: 'center',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
	paragraph: {
		marginTop: 30,
		fontFamily: 'Ballo2',
		fontSize: 18,
		color: '#FFF',
	},
})
