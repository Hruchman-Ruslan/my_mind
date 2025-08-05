import { WebView } from 'react-native-webview'

export default function WikiWebView() {
	return (
		<WebView source={{ uri: 'https://uk.wikipedia.org' }} style={{ flex: 1 }} />
	)
}
