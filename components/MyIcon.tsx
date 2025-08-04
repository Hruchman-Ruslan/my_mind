import { View, StyleSheet, ViewStyle, Pressable } from 'react-native'
import { ReactNode } from 'react'
import { Link, LinkProps } from 'expo-router'

interface MyIconProps {
	icon: ReactNode
	style?: ViewStyle
	href: LinkProps['href']
}

export default function MyIcon({ icon, style, href }: MyIconProps) {
	return (
		<Link href={href} asChild>
			<Pressable>
				<View style={[styles.circle, style]}>{icon}</View>
			</Pressable>
		</Link>
	)
}

const styles = StyleSheet.create({
	circle: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#43BCF0',
		backgroundColor: '#6EBCF7',
	},
})
