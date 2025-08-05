import { Tabs } from 'expo-router'
import { View } from 'react-native'

import CustomHeader from '@/components/CustomHeader'
import LogoText from '@/components/LogoText'
import MyIcon from '@/components/MyIcon'

import InfoIcon from '@/assets/images/svg/info.svg'
import Back from '@/assets/images/svg/back.svg'
import Heart from '@/components/Heart'
import PageIndicator from '@/components/PageIndicator'

import useCurrentPage from '@/hooks/useCurrentPage'

import { contentRoutes } from '@/constants/contentRoutes'

export default function GameLayout() {
	const currentPage = useCurrentPage()

	return (
		<Tabs>
			<Tabs.Screen
				name='game'
				options={{
					header: () => (
						<CustomHeader
							left={<View />}
							center={<LogoText />}
							right={<MyIcon icon={<InfoIcon />} href='/info' />}
						/>
					),
					tabBarStyle: { display: 'none' },
				}}
			/>

			<Tabs.Screen
				name='info'
				options={{
					header: () => (
						<CustomHeader
							left={<MyIcon icon={<Back />} href='..' />}
							center={<LogoText />}
							right={<View />}
						/>
					),
					tabBarStyle: { display: 'none' },
				}}
			/>

			{contentRoutes.map(name => (
				<Tabs.Screen
					key={name}
					name={name}
					options={{
						header: () => (
							<CustomHeader
								left={<MyIcon icon={<Back />} href='..' />}
								center={<Heart />}
								right={
									<PageIndicator
										current={currentPage}
										total={contentRoutes.length}
									/>
								}
							/>
						),
						tabBarStyle: { display: 'none' },
					}}
				/>
			))}
		</Tabs>
	)
}
