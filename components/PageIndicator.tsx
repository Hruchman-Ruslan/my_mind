import { Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

type PageIndicatorProps = {
	current: number
	total: number
}

export default function PageIndicator({ current, total }: PageIndicatorProps) {
	return (
		<LinearGradient
			colors={['#00FFB2', '#24BFC9']}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={styles.container}
		>
			<Text style={styles.text}>{`${current}/${total}`}</Text>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		width: 48,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		borderRadius: 71,
	},
	text: {
		color: '#FFF',
		textAlign: 'center',
		fontFamily: 'Baloo2',
		fontSize: 18,
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: undefined,
		textTransform: 'uppercase',
	},
})
