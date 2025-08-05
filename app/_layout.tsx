import { useEffect } from 'react'

import { Stack } from 'expo-router'

import initAppsFlyer from '../services/appsFlyer'
import initFirebase from '../services/firebase'
import initOneSignal from '../services/oneSignal'

export default function RootLayout() {
	useEffect(() => {
		initAppsFlyer()
		initFirebase()
		initOneSignal()
	}, [])

	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='(game)'
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	)
}
