import AsyncStorage from '@react-native-async-storage/async-storage'

export async function saveData(key: string, value: string) {
	try {
		await AsyncStorage.setItem(key, value)
	} catch (e) {
		console.error('AsyncStorage save error:', e)
	}
}

export async function getData(key: string): Promise<string | null> {
	try {
		const value = await AsyncStorage.getItem(key)
		return value
	} catch (e) {
		console.error('AsyncStorage get error:', e)
		return null
	}
}

export async function removeData(key: string) {
	try {
		await AsyncStorage.removeItem(key)
	} catch (e) {
		console.error('AsyncStorage remove error:', e)
	}
}
