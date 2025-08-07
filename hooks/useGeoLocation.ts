import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

export default function useGeoLocation() {
	const [isUkraine, setIsUkraine] = useState<boolean | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchCountry = async () => {
			try {
				const { status } = await Location.requestForegroundPermissionsAsync()
				if (status !== 'granted') {
					setIsUkraine(false)
					setLoading(false)
					return
				}

				const location = await Location.getCurrentPositionAsync({})
				const geo = await Location.reverseGeocodeAsync({
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
				})

				setIsUkraine(geo?.[0]?.country?.toLowerCase() !== 'ukraine')
			} catch {
				setIsUkraine(false)
			} finally {
				setLoading(false)
			}
		}

		fetchCountry()
	}, [])

	return { isUkraine, loading }
}
