import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from 'three';

export default function MacContainer() {
    let model = useGLTF('./mac.glb');
    let tex = useTexture('./appopen.png');
    let meshses = {};
    model.scene.traverse((child) => {
        meshses[child.name] = child;
    });

    meshses.matte.material.map = tex;
    meshses.matte.material.emissiveMap = tex;
    meshses.matte.material.emissiveIntensity = 0.5;
    meshses.matte.material.metalness = 0.1;
    meshses.matte.material.roughness = 0.8;
    meshses.matte.material.color.setRGB(0, 0, 0);

    let data = useScroll()

    useFrame((state, delta) => {
        meshses.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    })

    return (
        <group position={[0, -10, 20]}>
            <primitive object={model.scene} />
        </group>
    )
}
