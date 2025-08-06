import { useEffect } from 'react'

import { Stack } from 'expo-router'

import initAppsFlyer from '../services/appsFlyer'
import initFirebase from '../services/firebase'
import initOneSignal from '../services/oneSignal'
import { getData, saveData } from '@/services/storage'

export default function RootLayout() {
	useEffect(() => {
		async function initialize() {
			initAppsFlyer()
			initFirebase()
			initOneSignal()

			await saveData('userFakeToken', '123456789abcdef')
			const token = await getData('userFakeToken')
			console.log('User fake token from storage:', token)
		}

		initialize()
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
