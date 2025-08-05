import { usePathname } from 'expo-router'

import { contentPatch } from '@/constants/contentRoutes'

export default function useCurrentPage(): number {
	const pathname = usePathname()

	const index = contentPatch.findIndex(route => route === pathname)
	return index >= 0 ? index + 1 : 1
}
