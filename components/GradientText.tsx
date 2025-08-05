import { Text, StyleProp, TextStyle } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import MaskedView from '@react-native-masked-view/masked-view'

type GradientTextProps = {
	text: string
	colors: readonly [string, string, ...string[]]
	style?: StyleProp<TextStyle>
}

export default function GradientText({
	text,
	colors,
	style,
}: GradientTextProps) {
	return (
		<MaskedView
			maskElement={
				<Text style={[style, { backgroundColor: 'transparent' }]}>{text}</Text>
			}
		>
			<LinearGradient
				colors={colors}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
			>
				<Text style={[style, { opacity: 0 }]}>{text}</Text>
			</LinearGradient>
		</MaskedView>
	)
}
