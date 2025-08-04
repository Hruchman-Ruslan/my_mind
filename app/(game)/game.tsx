import { ImageBackground, FlatList, StyleSheet } from 'react-native'

import type { LinkProps } from 'expo-router'

import bg_3 from '../../assets/images/bg_3.jpg'

import useHideNavigationBar from '@/hooks/useHideNavigationBar'
import MyButton from '@/components/MyButton'

import zeus from '../../assets/images/zeus.png'
import dogs from '../../assets/images/dogs.png'
import tiger from '../../assets/images/tiger.png'
import candy from '../../assets/images/candy.png'
import space from '../../assets/images/space.png'
import jelly from '../../assets/images/jelly.png'
import magic from '../../assets/images/magic.png'
import robots from '../../assets/images/robots.png'

const images = [zeus, dogs, tiger, candy, space, jelly, magic, robots]

const routes: LinkProps['href'][] = [
	'/zeus',
	'/dogs',
	'/tiger',
	'/candy',
	'/space',
	'/jelly',
	'/magic',
	'/robots',
]

export default function GamePage() {
	useHideNavigationBar()

	return (
		<ImageBackground source={bg_3} style={{ flex: 1 }} resizeMode='cover'>
			<FlatList
				data={images}
				keyExtractor={(_, index) => index.toString()}
				numColumns={2}
				renderItem={({ item, index }) => (
					<MyButton source={item} to={routes[index]} />
				)}
				contentContainerStyle={styles.container}
				columnWrapperStyle={styles.row}
			/>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		alignItems: 'center',
	},
	row: {
		justifyContent: 'space-between',
		width: 280,
		marginBottom: 20,
	},
})
