import { useFonts } from 'expo-font'

import useGeoLocation from '@/hooks/useGeoLocation'

import * as SplashScreen from 'expo-splash-screen'

import Loading from '@/components/Loading'
import WikiWebView from '@/components/WebView'
import StartGame from '@/components/StartGame'

SplashScreen.preventAutoHideAsync()

export default function Index() {
	const [fontsLoaded] = useFonts({
		Courgette: require('../assets/fonts/Courgette-Regular.ttf'),
		Fredoka: require('../assets/fonts/Fredoka-Medium.ttf'),
		Ballo2: require('../assets/fonts/Baloo2-Regular.ttf'),
		BalloSemiBold: require('../assets/fonts/Baloo2-SemiBold.ttf'),
	})

	const { isUkraine, loading } = useGeoLocation()

	if (!fontsLoaded) {
		SplashScreen.hideAsync()
		return null
	}

	if (loading) return <Loading />

	return !isUkraine ? <StartGame /> : <WikiWebView />
}
