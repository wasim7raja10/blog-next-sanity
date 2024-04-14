function LoadingIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100"
			height="100"
			display="block"
			preserveAspectRatio="xMidYMid"
			viewBox="0 0 100 100"
			style={{}}
		>
			<g fill="none">
				<circle cx="50" cy="50" r="0" stroke="#2121bf">
					<animate
						attributeName="r"
						begin="0s"
						calcMode="spline"
						dur="1s"
						keySplines="0 0.2 0.8 1"
						keyTimes="0;1"
						repeatCount="indefinite"
						values="0;40"
					></animate>
					<animate
						attributeName="opacity"
						begin="0s"
						calcMode="spline"
						dur="1s"
						keySplines="0.2 0 0.8 1"
						keyTimes="0;1"
						repeatCount="indefinite"
						values="1;0"
					></animate>
				</circle>
				<circle cx="50" cy="50" r="0" stroke="#212121">
					<animate
						attributeName="r"
						begin="-0.5s"
						calcMode="spline"
						dur="1s"
						keySplines="0 0.2 0.8 1"
						keyTimes="0;1"
						repeatCount="indefinite"
						values="0;40"
					></animate>
					<animate
						attributeName="opacity"
						begin="-0.5s"
						calcMode="spline"
						dur="1s"
						keySplines="0.2 0 0.8 1"
						keyTimes="0;1"
						repeatCount="indefinite"
						values="1;0"
					></animate>
				</circle>
			</g>
			{/* [ldio] generated by https://loading.io */}
		</svg>
	);
}

export default LoadingIcon;
