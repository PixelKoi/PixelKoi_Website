import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const blurhash = {
	software: 'LVH2Zk.8?b?aIUs:RjR*~q%2M{M|',
	ux: 'LfM7cHx]-pj[rpofWBWU~qWBM{ax',
	web: 'LbMG-m~qMw9H.TxaNGjcr=IUWFWA'
};

interface MyComponentProps {
	src: any;
	hashCode: any;
}

const ImageComponent: React.FC<MyComponentProps> = ({ src, hashCode }) => {
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
				<Blurhash hash={hashCode} width={500} height={330} resolutionX={64} resolutionY={64} punch={1} />
			</div>
			<div style={{ display: imageLoaded ? 'inline' : 'none' }}>
				<img src={src} alt="" />
			</div>
		</div>
	);
};

export default ImageComponent;
