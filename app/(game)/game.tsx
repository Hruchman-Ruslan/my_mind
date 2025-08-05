import { ImageBackground, FlatList, StyleSheet } from 'react-native'

import bg_3 from '@/assets/images/bg/bg_3.jpg'

import contentData from '@/constants/contentRoutes'

import useHideNavigationBar from '@/hooks/useHideNavigationBar'

import MyButton from '@/components/MyButton'

export default function GamePage() {
	useHideNavigationBar()

	return (
		<ImageBackground source={bg_3} style={{ flex: 1 }} resizeMode='cover'>
			<FlatList
				data={contentData}
				keyExtractor={(_, index) => index.toString()}
				numColumns={2}
				renderItem={({ item }) => (
					<MyButton source={item.image} to={item.href} />
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
