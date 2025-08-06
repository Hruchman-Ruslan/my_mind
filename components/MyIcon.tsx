import { ReactNode } from 'react'
import { StyleSheet, ViewStyle, Pressable, View } from 'react-native'
import { Link, LinkProps } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

interface MyIconProps {
	icon: ReactNode
	style?: ViewStyle
	href: LinkProps['href']
}

export default function MyIcon({ icon, style, href }: MyIconProps) {
	return (
		<Link href={href} asChild>
			<Pressable>
				<LinearGradient
					colors={['#43BCF0', '#541896', '#711280']}
					start={{ x: 0.3, y: 0 }}
					end={{ x: 0.8, y: 1 }}
					style={[styles.gradientBorder, style]}
				>
					<View style={styles.innerCircle}>{icon}</View>
				</LinearGradient>
			</Pressable>
		</Link>
	)
}

const styles = StyleSheet.create({
	gradientBorder: {
		width: 35,
		height: 35,
		borderRadius: 50,
		padding: 2,
	},

	innerCircle: {
		flex: 1,
		borderRadius: 50,
		backgroundColor: '#6EBCF7',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
