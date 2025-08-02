import { OneSignal, LogLevel } from 'react-native-onesignal'

import Constants from 'expo-constants'

const ONE_SIGNAL_APP_ID = Constants.expoConfig?.extra?.oneSignalAppId

export function initOneSignal() {
	try {
		OneSignal.Debug.setLogLevel(LogLevel.Verbose)
		OneSignal.initialize(ONE_SIGNAL_APP_ID)
		OneSignal.Notifications.requestPermission(true)
		console.log('OneSignal initialized')
	} catch (error) {
		console.error('OneSignal init error:', error)
	}
}
