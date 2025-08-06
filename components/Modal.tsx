import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { LinkProps } from 'expo-router'

import { contentPatch } from '@/constants/contentRoutes'

import useCurrentPage from '@/hooks/useCurrentPage'

import MyIcon from './MyIcon'

import Back from '@/assets/images/svg/back.svg'
import Next from '@/assets/images/svg/next.svg'
import HomeIcon from '@/assets/images/svg/home.svg'

interface ModalProps {
	result: 'won' | 'lost' | null
	style?: StyleProp<ViewStyle>
}

export default function Modal({ result, style }: ModalProps) {
	const currentIndex = useCurrentPage() - 1
	if (!result) return null

	const isWon = result === 'won'
	const resultText = isWon ? 'YOU WON!' : 'YOU LOST!'

	let nextHref: LinkProps['href'] = '/'

	if (isWon) {
		nextHref =
			currentIndex < contentPatch.length - 1
				? contentPatch[currentIndex + 1]
				: '/'
	} else {
		nextHref = '..'
	}

	return (
		<View style={[styles.modalContainer, style]}>
			<LinearGradient
				colors={['#2BD5E8', '#8864E8']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={styles.gradientBox}
			>
				<LinearGradient
					colors={['#43BCF0', '#541896', '#711280']}
					start={{ x: 1, y: 0 }}
					end={{ x: 0.3, y: 1.2 }}
					style={styles.resultContainer}
				>
					<Text style={styles.resultText}>{resultText}</Text>
				</LinearGradient>
			</LinearGradient>

			<View style={styles.buttons}>
				<MyIcon href={'/'} icon={<HomeIcon />} />
				<MyIcon href={nextHref} icon={isWon ? <Next /> : <Back />} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		position: 'absolute',
		top: '30%',
		left: '10%',
		right: '10%',
		alignItems: 'center',
	},

	resultContainer: {
		display: 'flex',
		paddingVertical: 28,
		paddingHorizontal: 21,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 7,
		borderRadius: 14,
	},

	gradientBox: {
		height: 183,
		width: '100%',
		borderRadius: 21,
		borderWidth: 3.5,
		borderColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
	},

	resultText: {
		color: '#FFF',
		textAlign: 'center',
		fontFamily: 'Ballo2',
		fontSize: 27,
		fontWeight: '400',
		textTransform: 'uppercase',
	},

	buttons: {
		paddingHorizontal: 62,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		width: '100%',
	},
})
