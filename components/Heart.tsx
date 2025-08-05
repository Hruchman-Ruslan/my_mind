import { Image } from 'react-native'

import HeartImage from '@/assets/images/svg/heart.png'

export default function Heart() {
	return (
		<Image source={HeartImage} alt='heart' style={{ width: 30, height: 30 }} />
	)
}
