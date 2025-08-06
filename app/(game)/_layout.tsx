import { View } from 'react-native'
import { Tabs } from 'expo-router'

import CustomHeader from '@/components/CustomHeader'
import MyIcon from '@/components/MyIcon'

import PageIndicator from '@/components/PageIndicator'
import Heart from '@/components/Heart'
import Logo from '@/components/Logo'

import useCurrentPage from '@/hooks/useCurrentPage'

import { contentRoutes } from '@/constants/contentRoutes'

import InfoIcon from '@/assets/images/svg/info.svg'
import Back from '@/assets/images/svg/back.svg'

export default function GameLayout() {
	const currentPage = useCurrentPage()

	return (
		<Tabs>
			<Tabs.Screen
				name='game'
				options={{
					header: () => (
						<CustomHeader
							left={<View style={{ width: 30 }} />}
							center={<Logo />}
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
							center={<Logo />}
							right={<View style={{ width: 30 }} />}
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
