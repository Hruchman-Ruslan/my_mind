import appsFlyer from 'react-native-appsflyer'

export default function initAppsFlyer() {
	appsFlyer.initSdk(
		{
			devKey: 'FAKE_DEV_KEY',
			isDebug: true,
			appId: '1234567890',
		},
		result => {
			console.log('AppsFlyer init result:', result)
		},
		error => {
			console.log('AppsFlyer init error:', error)
		}
	)
}
