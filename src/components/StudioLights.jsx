import { Environment, Lightformer } from "@react-three/drei"

const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer // Define lighting filters
            form="rect"
            position={[-10, 5, -5]}
            intensity={10}
            scale={10}
            rotation-y={Math.PI / 2}
          />

          <Lightformer // Define lighting filters
            form="rect"
            position={[-10, 10, 1]} // Here is the position of model
            intensity={10}
            scale={10}
            rotation-y={Math.PI / 2}
          />

        </group>
      </Environment>

      {/* Add Spotlights */}
      <spotLight 
      angle={0.15}
      decay={0}
      position={[-2, 10, 5]}
      intensity={Math.PI * 0.2}
      />
      <spotLight 
      angle={0.15}
      decay={0}
      position={[-2, 25, 10]}
      intensity={Math.PI * 0.2}
      />

      <spotLight 
      angle={0.15}
      decay={0.1}
      position={[0, 15, 5]}
      intensity={Math.PI * 0.1}
      />
    </group>
  )
}

export default StudioLights
