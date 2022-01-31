import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = 2
pointLight.position.y = 2
pointLight.position.z = 4
scene.add(pointLight)

const geometry = new THREE.BufferGeometry()

const positionsArray = new Float32Array([
    // L FRONT
    -.07, .5, .1,   // B
    -.28, .5, .1,   // A
    -.28, -.5, .1,  // C -
    -.07, .5, .1,   // B
    -.28, -.5, .1,  // C
    -.07, -.5, .1,  // D -
    -.07, -.3, .1,  // E
    -.07, -.5, .1,  // D
    .07, -.5, .1,   // F -
    -.07, -.3, .1,  // E
    .07, -.5, .1,   // F
    .14, -.3, .1,   // G -
    
    // FIRST DASH FRONT
    .17, -.3, .1,   // H
    .1, -.5, .1,    // I
    .16, -.5, .1,   // J - 
    .17, -.3, .1,   // H
    .16, -.5, .1,   // J
    .23, -.3, .1,   // K -

    // SECOND DASH FRONT
    .26, -.3, .1,   // L
    .20, -.5, .1,   // M
    .26, -.5, .1,   // N -
    .26, -.3, .1,   // L
    .26, -.5, .1,   // N
    .32, -.3, .1,   // O -
    
    // L BACK
    -.28, .5, -.1,  // A'
    -.07, .5, -.1,  // B'
    -.28, -.5, -.1, // C' -
    -.28, -.5, -.1, // C'
    -.07, .5, -.1,  // B'
    -.07, -.5, -.1, // D' -
    -.07, -.5, -.1, // D'
    -.07, -.3, -.1, // E'
    .07, -.5, -.1,  // F' -
    .07, -.5, -.1,  // F'
    -.07, -.3, -.1, // E'
    .14, -.3, -.1,  // G' -

    // FIRST DASH BACK
    .1, -.5, -.1,   // I'
    .17, -.3, -.1,  // H'
    .16, -.5, -.1,  // J' -
    .16, -.5, -.1,  // J'
    .17, -.3, -.1,  // H'
    .23, -.3, -.1,  // K' -

    // SECOND DASH BACK
    .20, -.5, -.1,  // M'
    .26, -.3, -.1,  // L'
    .26, -.5, -.1,  // N' -
    .26, -.5, -.1,  // N'
    .26, -.3, -.1,  // L'
    .32, -.3, -.1,  // O' -

    -.28, .5, -.1,  // A'
    -.28, -.5, -.1, // C'
    -.28, .5, .1,   // A
    -.28, -.5, .1,  // C
    -.28, .5, .1,   // A
    -.28, -.5, -.1, // C'

    -.28, .5, .1,   // A
    -.07, .5, .1,   // B
    -.28, .5, -.1,  // A'
    -.07, .5, .1,   // B
    -.07, .5, -.1,  // B'
    -.28, .5, -.1,  // A'

    -.07, .5, .1,   // B
    -.07, -.3, .1,  // E
    -.07, .5, -.1,  // B'
    -.07, -.3, .1,  // E
    -.07, -.3, -.1, // E'
    -.07, .5, -.1,  // B'

    -.07, -.3, .1,  // E
    .14, -.3, .1,   // G
    .14, -.3, -.1,  // G'
    -.07, -.3, -.1, // E'
    -.07, -.3, .1,  // E
    .14, -.3, -.1,  // G'

    .14, -.3, .1,   // G
    .07, -.5, .1,   // F
    .14, -.3, -.1,  // G'
    .07, -.5, .1,   // F
    .07, -.5, -.1,  // F'
    .14, -.3, -.1,  // G'

    -.28, -.5, .1,  // C
    -.28, -.5, -.1, // C'
    .07, -.5, .1,   // F 
    .07, -.5, -.1,  // F'
    .07, -.5, .1,   // F 
    -.28, -.5, -.1, // C'

    .17, -.3, .1,   // H
    .17, -.3, -.1,  // H'
    .1, -.5, .1,    // I
    .1, -.5, -.1,   // I'
    .1, -.5, .1,    // I
    .17, -.3, -.1,  // H'

    .17, -.3, .1,   // H
    .23, -.3, .1,   // K
    .17, -.3, -.1,  // H'
    .23, -.3, .1,   // K
    .23, -.3, -.1,  // K'
    .17, -.3, -.1,  // H'

    .23, -.3, .1,   // K
    .16, -.5, .1,   // J
    .23, -.3, -.1,  // K'
    .16, -.5, .1,   // J
    .16, -.5, -.1,  // J'
    .23, -.3, -.1,   // K'

    .1, -.5, .1,    // I
    .16, -.5, -.1,  // J'
    .16, -.5, .1,   // J
    .1, -.5, -.1,   // I'
    .16, -.5, -.1,  // J'
    .1, -.5, .1,    // I

    .26, -.3, .1,   // L
    .20, -.5, -.1,  // M'
    .20, -.5, .1,   // M
    .26, -.3, -.1,  // L'
    .20, -.5, -.1,  // M'
    .26, -.3, .1,   // L

    .26, -.3, -.1,  // L'
    .26, -.3, .1,   // L
    .32, -.3, .1,   // O
    .32, -.3, .1,   // O
    .32, -.3, -.1,  // O'
    .26, -.3, -.1,  // L'

    .32, -.3, .1,   // O
    .26, -.5, .1,   // N
    .32, -.3, -.1,  // O'
    .26, -.5, -.1,  // N'
    .32, -.3, -.1,  // O'
    .26, -.5, .1,   // N

    .20, -.5, .1,   // M
    .26, -.5, -.1,  // N'
    .26, -.5, .1,   // N
    .20, -.5, -.1,  // M'
    .26, -.5, -.1,  // N'
    .20, -.5, .1,   // M
])

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)
geometry.computeVertexNormals()

const material = new THREE.MeshLambertMaterial({ color: 0xE30613 })

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Rotate
    mesh.rotation.y = elapsedTime;
    mesh.rotation.z = elapsedTime;

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()