import type { LinkProps } from 'expo-router'

import zeus from '@/assets/images/content/zeus.png'
import dogs from '@/assets/images/content/dogs.png'
import tiger from '@/assets/images/content/tiger.png'
import candy from '@/assets/images/content/candy.png'
import galaxy from '@/assets/images/content/galaxy.png'
import jelly from '@/assets/images/content/jelly.png'
import magic from '@/assets/images/content/magic.png'
import robots from '@/assets/images/content/robots.png'

export type ContentItem = {
	name: string
	image: any
	href: LinkProps['href']
}

const contentData: ContentItem[] = [
	{ name: 'zeus', image: zeus, href: '/zeus' },
	{ name: 'dogs', image: dogs, href: '/dogs' },
	{ name: 'tiger', image: tiger, href: '/tiger' },
	{ name: 'candy', image: candy, href: '/candy' },
	{ name: 'galaxy', image: galaxy, href: '/galaxy' },
	{ name: 'jelly', image: jelly, href: '/jelly' },
	{ name: 'magic', image: magic, href: '/magic' },
	{ name: 'robots', image: robots, href: '/robots' },
]

export const contentRoutes: string[] = contentData.map(item => item.name)

export const contentPatch: LinkProps['href'][] = contentData.map(
	item => item.href
)

export default contentData
