import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const blurhash = {
	software: 'LVH2Zk.8?b?aIUs:RjR*~q%2M{M|',
	ux: 'LfM7cHx]-pj[rpofWBWU~qWBM{ax',
	web: 'LbMG-m~qMw9H.TxaNGjcr=IUWFWA'
};

// interface blur {
// 	src: any;
// 	hash: any;
// }

const ImageComponent = ({ src }: any) => {
	const [ imageLoaded, setImageLoaded ] = useState(false);
	useEffect(
		() => {
			const img = new Image();
			img.onload = () => {
				setImageLoaded(true);
			};
			img.src = src;
		},
		[ src ]
	);

	return (
		<div>
			<div style={{ display: imageLoaded ? 'none' : 'inline' }}>
				<Blurhash
					hash="LVH2Zk.8?b?aIUs:RjR*~q%2M{M|"
					width={500}
					height={330}
					resolutionX={64}
					resolutionY={64}
					punch={1}
				/>
			</div>
			<div style={{ display: imageLoaded ? 'inline' : 'none' }}>
				<img src={src} alt="" />
			</div>
		</div>
	);
};

export default ImageComponent;
