import Loading from './components/Loading'
import WikiWebView from './components/WebView'
import Game from './components/Game'

import useGeoLocation from './hooks/useGeoLocation'

export default function Index() {
	const { isUkraine, loading } = useGeoLocation()

	if (loading) return <Loading />

	return isUkraine ? <Game /> : <WikiWebView />
}
