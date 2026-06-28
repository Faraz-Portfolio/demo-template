import { Inspector } from "@/Inspector";
import { UI } from "@/UI";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import * as THREE from "three/webgpu";

extend(THREE as any);

export default function App() {
  return (
    <>
      <UI />
      <Canvas
        shadows
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer(props as any);
          await renderer.init();
          return renderer;
        }}
      >
        <OrbitControls makeDefault />
        <PerspectiveCamera position={[5, 5, 5]} makeDefault fov={35} />

        <axesHelper />
        <gridHelper />

        <Inspector />
      </Canvas>
    </>
  );
}
