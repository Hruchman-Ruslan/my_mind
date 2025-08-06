import { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
	size?: number
	children: ReactNode
}

export default function ActiveImageCard({ size = 150, children }: Props) {
	return (
		<View style={[styles.card, { width: size, height: size }]}>{children}</View>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		borderWidth: 4,
		borderColor: '#6EBCF7',
		backgroundColor: '#2E2B42',
		overflow: 'hidden',
	},
})
