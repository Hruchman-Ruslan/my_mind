import { View, StyleSheet } from 'react-native'

import GradientText from './GradientText'

export default function LogoText() {
	return (
		<View style={styles.container}>
			<GradientText text='My' colors={['#FFF', '#4DACE9']} style={styles.my} />
			<GradientText
				text='Mind'
				colors={['#2BD5E8', '#8864E8']}
				style={styles.mind}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// paddingTop: 42,
		// paddingBottom: 11,
	},
	my: {
		fontFamily: 'Courgette',
		fontSize: 14.8,
		fontWeight: '400',
		textTransform: 'uppercase',
		paddingLeft: 10,
	},
	mind: {
		fontFamily: 'Fredoka',
		fontSize: 28.3,
		fontWeight: '500',
	},
})
