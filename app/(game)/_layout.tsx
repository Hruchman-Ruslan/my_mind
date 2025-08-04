import { Tabs } from 'expo-router'

import CustomHeader from '@/components/CustomHeader'
import { View } from 'react-native'
import LogoText from '@/components/LogoText'

import MyIcon from '@/components/MyIcon'

import InfoIcon from '../../assets/images/info.svg'
import Back from '../../assets/images/back.svg'

export default function GameLayout() {
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
							left={<MyIcon icon={<Back />} href={'..'} />}
							center={<LogoText />}
							right={<View />}
						/>
					),
					tabBarStyle: { display: 'none' },
				}}
			/>
		</Tabs>
	)
}
