import {
	TouchableOpacity,
	Image,
	ImageSourcePropType,
	StyleProp,
	ImageStyle,
} from 'react-native'
import { LinkProps, useRouter } from 'expo-router'

type IconButtonProps = {
	source: ImageSourcePropType
	to?: LinkProps['href']
	style?: StyleProp<ImageStyle>
	alt?: string
}

export default function MyButton({ source, to, alt, style }: IconButtonProps) {
	const router = useRouter()

	const handlePress = () => {
		if (to) router.push(to)
	}

	return (
		<TouchableOpacity onPress={handlePress}>
			<Image
				source={source}
				alt={alt}
				style={[{ width: 130, height: 130 }, style]}
			/>
		</TouchableOpacity>
	)
}
