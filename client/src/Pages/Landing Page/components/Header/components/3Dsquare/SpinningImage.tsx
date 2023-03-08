import React, { useRef } from 'react';
import * as THREE from 'three';

const SpinningObject: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const requestRef = useRef<number>(0);
	const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
	const cameraRef = useRef<THREE.PerspectiveCamera>(
		new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
	);
	sceneRef.current.background = new THREE.Color(0x171717);
	const rendererRef = useRef<THREE.WebGLRenderer>(new THREE.WebGLRenderer());

	// Create a box geometry for the spinning object
	const geometry = new THREE.BoxGeometry(1, 1, 1);

	// Create a material for the spinning object
	const material = new THREE.MeshBasicMaterial({ color: 0xffa500, wireframe: true });

	// Create the spinning object
	const cube = new THREE.Mesh(geometry, material);
	cube.position.set(3, 0, 0);

	// Add the spinning object to the scene
	sceneRef.current.add(cube);

	const animate = (time: number) => {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		rendererRef.current.render(sceneRef.current, cameraRef.current);

		requestRef.current = requestAnimationFrame(animate);
	};

	const startAnimation = () => {
		if (!requestRef.current) {
			requestRef.current = requestAnimationFrame(animate);
		}
	};

	const stopAnimation = () => {
		if (requestRef.current) {
			cancelAnimationFrame(requestRef.current);
			requestRef.current = 0;
		}
	};

	const updateCameraAspect = () => {
		const { clientWidth, clientHeight } = containerRef.current || { clientWidth: 0, clientHeight: 0 };
		cameraRef.current.aspect = clientWidth / clientHeight;
		cameraRef.current.updateProjectionMatrix();
		rendererRef.current.setSize(clientWidth, clientHeight);
	};

	// Set up the Three.js scene when the component mounts
	React.useEffect(() => {
		if (containerRef.current) {
			const container = containerRef.current;

			cameraRef.current.position.z = 5;

			rendererRef.current.setSize(window.innerWidth, window.innerHeight);
			container.appendChild(rendererRef.current.domElement);

			startAnimation();

			return stopAnimation;
		}
	}, []);

	return (
		<div
			style={{ position: 'absolute', zIndex: '1', margin: '0 -5rem', backgroundColor: 'transparent' }}
			ref={containerRef}
		/>
	);
};

export default SpinningObject;
