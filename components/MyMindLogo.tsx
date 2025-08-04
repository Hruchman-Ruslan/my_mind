import Svg, {
	Path,
	Rect,
	Defs,
	LinearGradient,
	Stop,
	SvgProps,
	Text as SvgText,
} from 'react-native-svg'

export default function MyMindLogo(props: SvgProps) {
	return (
		<Svg width={252} height={252} viewBox='0 0 252 252' fill='none' {...props}>
			<Path
				d='M88.001 93.363V17.3469C88.001 9.9756 93.9766 4 101.348 4H234.653C242.024 4 248 9.9756 248 17.3469V150.653C248 158.024 242.024 164 234.653 164H157.944'
				stroke='url(#paint0_linear_63_525)'
				strokeWidth={6.44156}
			/>
			<Rect
				x={3.22078}
				y={-3.22078}
				width={153.557}
				height={153.558}
				rx={10.1261}
				transform='matrix(1 0 0 -1 0 245.558)'
				stroke='url(#paint1_linear_63_525)'
				strokeWidth={6.44156}
			/>

			<SvgText
				x={98}
				y={98}
				fill='url(#gradMyText)'
				textAnchor='middle'
				fontFamily='Courgette'
				fontSize={40.743}
				fontStyle='normal'
				fontWeight='400'
			>
				MY
			</SvgText>

			<SvgText
				x={124}
				y={165}
				fill='url(#gradMindText)'
				textAnchor='middle'
				fontFamily='Fredoka'
				fontSize={77.87}
				fontStyle='normal'
				fontWeight='500'
			>
				Mind
			</SvgText>

			<Defs>
				<LinearGradient
					id='paint0_linear_63_525'
					x1={-187.997}
					y1={258.666}
					x2={188.279}
					y2={397.38}
					gradientUnits='userSpaceOnUse'
				>
					<Stop stopColor='#2BD5E8' />
					<Stop offset={1} stopColor='#8864E8' />
				</LinearGradient>
				<LinearGradient
					id='paint1_linear_63_525'
					x1={-49.1641}
					y1={320}
					x2={211.743}
					y2={257.071}
					gradientUnits='userSpaceOnUse'
				>
					<Stop stopColor='#2BD5E8' />
					<Stop offset={1} stopColor='#8864E8' />
				</LinearGradient>

				<LinearGradient id='gradMyText' x1='0%' y1='0%' x2='100%' y2='100%'>
					<Stop offset='27.47%' stopColor='#FFFFFF' />
					<Stop offset='103.48%' stopColor='#4DACE9' />
				</LinearGradient>

				<LinearGradient id='gradMindText' x1='0%' y1='100%' x2='100%' y2='0%'>
					<Stop offset='-37.06%' stopColor='#2BD5E8' />
					<Stop offset='94.81%' stopColor='#8864E8' />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}
