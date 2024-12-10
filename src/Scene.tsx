import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, SpotLight } from '@react-three/drei'
import { useState, useMemo } from 'react'
import * as THREE from 'three'
import fig1 from '../src/assets/fig1.png';
import fig2 from '../src/assets/fig2.png';
import fig3 from '../src/assets/fig3.png';
import fig4 from '../src/assets/fig4.png';
import fig5 from '../src/assets/fig5.png';
import fig6 from '../src/assets/fig6.png';
import fig7 from '../src/assets/fig7.png';
import fig8 from '../src/assets/fig8.png';
import fig9 from '../src/assets/fig9.png';
import fig10 from '../src/assets/fig10.png';
import fig11 from '../src/assets/fig11.jpg';
import fig12 from '../src/assets/fig12.jpg';
import fig13 from '../src/assets/fig13.jpg';
import fig14 from '../src/assets/fig14.jpg';
import fig15 from '../src/assets/fig15.jpg';
import fig16 from '../src/assets/fig16.jpg';
import fig17 from '../src/assets/fig17.jpg';
import fig18 from '../src/assets/fig18.jpg';
import fig19 from '../src/assets/fig19.png';
import fig20 from '../src/assets/fig20.png';
import { mx_bilerp_0 } from 'three/src/nodes/materialx/lib/mx_noise.js'

interface PetalData {
  id: number
  title: string
  description: string
  image: string
}

interface PetalProps {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
  onClick: () => void
  isSelected: boolean
  petalData: PetalData
  layer: number
}

interface PopupWindowProps {
  title: string
  description: string
  image: string
  onClose: () => void
}

const EtherealLight: React.FC = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '50px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '800px',
      height: '400px',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse at center, rgba(255, 252, 200, 0.2) 0%, rgba(255, 252, 200, 0.15) 20%, rgba(255, 252, 200, 0.1) 40%, rgba(255, 252, 200, 0.05) 60%, rgba(255, 252, 200, 0) 80%)',
        filter: 'blur(50px)',
        animation: 'softPulse 8s ease-in-out infinite'
      }} />

      <style>
        {`
          @keyframes softPulse {
            0% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
            100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          }
        `}
      </style>
    </div>
  );
};

const PageTitle: React.FC = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      color: '#ffffff',
      zIndex: 1000,
      fontFamily: 'Garamond, serif',
      padding: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '10px'
      }}>
        Dante's <i>Paradiso</i>
      </h1>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'normal',
        color: '#e0e0e0'
      }}>
        Illustrations of the Empyrean 
      </h2>
    </div>
  )
}

const StarField: React.FC = () => {
  const starCount = 200
  const stars = useMemo(() => {
    const temp = []
    for (let i = 0; i < starCount; i++) {
      temp.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        animationDelay: Math.random() * 3
      })
    }
    return temp
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}
    >
      {stars.map((star, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            opacity: 0.8,
            animation: `twinkle 3s infinite ${star.animationDelay}s`
          }}
        />
      ))}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.8; }
            50% { opacity: 0.4; }
            100% { opacity: 0.8; }
          }
        `}
      </style>
    </div>
  )
}

const PopupWindow: React.FC<PopupWindowProps> = ({ title, description, image, onClose }) => {
 
  return (
    <div style={{
      backgroundColor: '#F5E6D3',  // Parchment-like beige
      border: '8px double #8B4513',
      borderRadius: '0px',
      padding: '24px',
      width: '400px',
      maxHeight: '80vh',
      boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
      position: 'relative',
      overflowY: 'auto',
      maxWidth: '90vw',
      margin: '20px',
      fontFamily: "'Crimson Text', serif"
    }}>
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: '#8B4513',
          border: '2px solid #4A2508',
          color: '#F5E6D3',
          fontSize: '24px',
          cursor: 'pointer',
          padding: '5px 12px',
          borderRadius: '0px',
          fontFamily: "'Crimson Text', serif",
          fontWeight: 'bold'
        }}
      >
        ×
      </button>
      <div style={{
        border: '4px solid #8B4513',
        padding: '8px',
        marginBottom: '20px',
        
        overflow: 'hidden'
      }}>
        <img 
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#4A2508',
        textAlign: 'center',
        fontFamily: "'UnifrakturMaguntia', cursive",
        letterSpacing: '0.05em',
        borderBottom: '2px solid #8B4513',
        paddingBottom: '10px'
      }}>{title}</h3>
      <p style={{
        margin: '0',
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#4A2508',
        fontFamily: "'Crimson Text', serif",
        textAlign: 'justify',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}>{description}</p>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Crimson+Text:wght@400;600&display=swap');
        `}
      </style>
    </div>
  )
}

const Petal: React.FC<PetalProps> = ({ position, rotation, scale, onClick, isSelected, petalData, layer }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const petalShape = useMemo(() => {
    const shape = new THREE.Shape()
    const radius = 1
    const baseWidth = 1.2
    
    shape.moveTo(-baseWidth, 0)
    
    const segments = 48
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI
      const wave = Math.sin(theta * 4) * 0.1
      const x = Math.cos(theta) * baseWidth * (1 + wave)
      const y = Math.sin(theta) * radius * (1 + Math.sin(theta) * 0.3) + Math.pow(Math.sin(theta), 2) * 0.5
      shape.lineTo(x, y)
    }
    
    shape.lineTo(-baseWidth, 0)
    
    return shape
  }, [])

  // Create gradient texture
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')
    if (ctx) {
      // Create enhanced radial gradient with more dramatic color transitions
      const gradient = ctx.createRadialGradient(
        256, 256, 0,    
        256, 256, 512   
      )
      
      // More color stops with stronger transitions
      gradient.addColorStop(0, '#ffffff')       // Pure white center
      gradient.addColorStop(0.2, '#fff5f6')     // Nearly white
      gradient.addColorStop(0.4, '#ffe4e8')     // Very light pink
      gradient.addColorStop(0.6, '#ffd1d9')     // Light pink
      gradient.addColorStop(0.75, '#ffb6c1')    // Medium pink
      gradient.addColorStop(0.85, '#ff99a3')    // Darker pink
      gradient.addColorStop(1, '#ff8b96')       // Most intense pink at edges
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 512, 512)
      
      // Enhanced creases with higher contrast
      for (let i = 0; i < 7; i++) {             // Increased number of creases
        const creaseGradient = ctx.createLinearGradient(256, 0, 256, 512)
        creaseGradient.addColorStop(0, 'rgba(255, 192, 203, 0)')
        creaseGradient.addColorStop(0.5, 'rgba(255, 192, 203, 0.35)') // Increased opacity
        creaseGradient.addColorStop(1, 'rgba(255, 192, 203, 0)')
        
        ctx.save()
        ctx.translate(256, 256)
        ctx.rotate((Math.PI / 7) * i)           // Adjusted rotation for more creases
        ctx.fillStyle = creaseGradient
        ctx.fillRect(-256, -256, 512, 512)
        
        // Add secondary creases for more detail
        ctx.rotate(Math.PI / 14)                // Offset secondary creases
        ctx.fillStyle = 'rgba(255, 192, 203, 0.15)'
        ctx.fillRect(-256, -256, 512, 512)
        ctx.restore()
      }
    }
    return new THREE.CanvasTexture(canvas)
  }, [])

  const displacementTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')
    if (ctx) {
      for (let i = 0; i < 5; i++) {
        const gradient = ctx.createLinearGradient(128, 0, 128, 256)
        gradient.addColorStop(0, 'rgba(128, 128, 128, 0)')
        gradient.addColorStop(0.5, 'rgba(128, 128, 128, 0.2)')
        gradient.addColorStop(1, 'rgba(128, 128, 128, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, i * 51, 256, 20)
      }
    }
    return new THREE.CanvasTexture(canvas)
  }, [])

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh
        onClick={onClick}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <extrudeGeometry
          args={[
            petalShape,
            {
              steps: 4,
              depth: 0.15,
              bevelEnabled: true,
              bevelThickness: 0.08,
              bevelSize: 0.06,
              bevelSegments: 24
            }
          ]}
        />
        <meshStandardMaterial
          map={gradientTexture}
          roughness={0.25}
          metalness={0.05}
          emissive={layer % 2 === 0 ? "#ffffff" : "#ffe4e8"}
          emissiveIntensity={isHovered ? 0.4 : 0.2}
          normalMap={displacementTexture}
          normalScale={new THREE.Vector2(0.4, 0.4)}
          side={THREE.DoubleSide}
        />
      </mesh>
      {isSelected && (
        <Html position={[0, -50, 0]}>
          <PopupWindow
            title={petalData.title}
            description={petalData.description}
            image={petalData.image}
            onClose={() => onClick()}
          />
        </Html>
      )}
    </group>
  )
}

const Center: React.FC = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.1, 20, 20, 20, Math.PI * 2, 0, Math.PI*0.53]} />
      <meshStandardMaterial
        color="#FFD700"
        roughness={0.2}
        metalness={0.3}
        emissive="#FFD700"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

const Lotus: React.FC = () => {
  const [selectedPetal, setSelectedPetal] = useState<number | null>(null)

  const petalData: PetalData[] = [
    { 
      id: 1, 
      title: "Dante sees the heavenly legion seated in the shape of a rose)", 
      description: "Giovanni di Paolo (1450)", 
      image: fig1
    },
    { 
      id: 2, 
      title: "Virgin and child in the Celestial Rose", 
      description: "Giovanni di Paolo (1450)", 
      image: fig2 
    },
    { 
      id: 3, 
      title: "Dante sees a brilliant point of light--the Primum Mobile", 
      description: "Giovanni di Paolo (1450)", 
      image: fig3 
    }, 
    { 
      id: 4, 
      title: "The Celestial rose", 
      description: "Alessandro Vellutello (1544)", 
      image: fig4
    }, 
    { 
      id: 5, 
      title: "The Celestial rose", 
      description: "Alessandro Vellutello (1544)", 
      image: fig5
    }, 
    { 
      id: 6, 
      title: "Nine circles of angelic hieararchies", 
      description: "Alessandro Vellutello (1544)", 
      image: fig6
    },
    { 
      id: 7, 
      title: "Nine circles of angelic hieararchies", 
      description: "Alessandro Vellutello (1544)", 
      image: fig7
    },
    { 
      id: 8, 
      title: "Empyrean", 
      description: "Alessandro Vellutello (1544)", 
      image: fig8
    },
    { 
      id: 9, 
      title: "Empyrean", 
      description: "Alessandro Vellutello (1544)", 
      image: fig9
    },
    { 
      id: 10, 
      title: "The Queen of Heaven in Glory", 
      description: "William Blake (1824)", 
      image: fig10
    },
    { 
      id: 11, 
      title: "The saintly throng in the shape of a rose", 
      description: "Gustave Doré (1868)", 
      image: fig11
    },
    { 
      id: 12, 
      title: "The saintly throng in the shape of a rose", 
      description: "Gustave Doré (1868)", 
      image: fig12
    },
    { 
      id: 13, 
      title: "Empyrean", 
      description: "Salvador Dalí (1963)", 
      image: fig13
    },
    { 
      id: 14, 
      title: " Arrival at the Empyrean", 
      description: "Salvador Dalí (1963)", 
      image: fig14
    },
    { 
      id: 15, 
      title: "The Angels of the Empyrean", 
      description: "Salvador Dalí (1963)", 
      image: fig15
    },
    { 
      id: 16, 
      title: "The Joy of the Blessed", 
      description: "Salvador Dalí (1963)", 
      image: fig16
    },
    { 
      id: 17, 
      title: "The Sphere of Venus", 
      description: "Salvador Dalí (1963)", 
      image: fig17
    },
    { 
      id: 18, 
      title: "The Angel of the Seventh Sphere", 
      description: "Salvador Dalí (1963)", 
      image: fig18
    },
    { 
      id: 19, 
      title: "Creation of angels", 
      description: "Sandro Botticelli (1480)", 
      image: fig19
    },
    { 
      id: 20, 
      title: "River of light", 
      description: "Sandro Botticelli (1480)", 
      image: fig20
    },
    { 
      id: 21,
      title: "Paradiso Canto XXXIII.127-132",
      description: "That circulation, which being thus conceived appeared in Thee as light's reflected ray, by mine eyes surveyed around its whole extent, within itself and in its own true color seemed to be painted with our human likeness.",
      image: 'fig11.jpg'
    },
    { 
      id: 22,
      title: "Paradiso Canto XXXII.13-18",
      description: "Look now upon the face that unto Christ most resembles Him, for only through its brightness can you prepare yourself to look on Christ. I saw rain down upon her such great joy, borne in the holy minds created to fly through that height.",
      image: 'fig12.jpg'
    },
    { 
      id: 23,
      title: "Paradiso Canto XXXII.146-150",
      description: "And he who had through contemplation gained so much experience, said: That thou mayst wholly finish thy journey, whereunto prayer and holy love have sent me, let thy eyes fly around this garden's plots.",
      image: 'fig13.jpg'
    },
    { 
      id: 24,
      title: "Paradiso Canto XXXI.70-72",
      description: "As one who comes, perhaps, from Croatia to see our Veronica, and whose old fame cannot satisfy his hunger, who says in thought, as long as it is shown.",
      image: 'fig14.jpg'
    },
    { 
      id: 25,
      title: "Paradiso Canto XXXII.31-36",
      description: "Thus I, addressing me to him who had beforehand drawn from Mary's burdened womb, saw how the glorious host of blessed spirits filled out the flower and sacred ranks between.",
      image: 'fig15.jpg'
    },
    { 
      id: 26,
      title: "Paradiso Canto XXX.46-51",
      description: "Light intellectual, full of perfect love, love of true good, full of perfect gladness, gladness which far transcendeth every sweetness. Here shalt thou see the one host and the other of Paradise, and one in the same aspects which thou shalt witness at the final judgment.",
      image: 'fig16.jpg'
    },
    { 
      id: 27,
      title: "Paradiso Canto XXXIII.82-84",
      description: "O abundant grace, whence I presumed to fix my look on the eternal light so long that I consumed my sight thereon!",
      image: 'fig17.jpg'
    },
    { 
      id: 28,
      title: "Paradiso Canto XXXIII.143-145",
      description: "Here vigor failed the high imagination: but now was turning my desire and will, even as a wheel that equally is moved, the Love which moves the sun and the other stars.",
      image: 'fig18.jpg'
    },
    { 
      id: 29,
      title: "Paradiso Canto XXXI.91-93",
      description: "My words fall far below the thing I saw, and now my mind shrinks from the memory, as weakness shrinks beneath too great a weight.",
      image: 'fig19.png'
    },
    { 
      id: 30,
      title: "Paradiso Canto XXXII.52-57",
      description: "Down through all that rose, from rank to rank, there is no soul that makes not a fair flower of this garden. For these are the leaves wherein the Rose of the eternal spring spreads layer on layer, that blooms forever in the rays of noon.",
      image: 'fig20.png'
    },
    { 
      id: 31,
      title: "Paradiso Canto XXXIII.127-132",
      description: "That circulation, which being thus conceived appeared in Thee as light's reflected ray, by mine eyes surveyed around its whole extent, within itself and in its own true color seemed to be painted with our human likeness.",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    },
    { 
      id: 32,
      title: "Paradiso Canto XXXII.13-18",
      description: "Look now upon the face that unto Christ most resembles Him, for only through its brightness can you prepare yourself to look on Christ. I saw rain down upon her such great joy, borne in the holy minds created to fly through that height.",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    },
    { 
      id: 33,
      title: "Paradiso Canto XXXII.146-150",
      description: "And he who had through contemplation gained so much experience, said: That thou mayst wholly finish thy journey, whereunto prayer and holy love have sent me, let thy eyes fly around this garden's plots.",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    },
    { 
      id: 34,
      title: "Paradiso Canto XXXI.70-72",
      description: "As one who comes, perhaps, from Croatia to see our Veronica, and whose old fame cannot satisfy his hunger, who says in thought, as long as it is shown.",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    },
    { 
      id: 35,
      title: "Paradiso Canto XXXII.31-36",
      description: "Thus I, addressing me to him who had beforehand drawn from Mary's burdened womb, saw how the glorious host of blessed spirits filled out the flower and sacred ranks between.",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    },
    { 
      id: 36,
      title: "Paradiso Canto XXX.46-51",
      description: "Light intellectual, full of perfect love, love of true good, full of perfect gladness, gladness which far transcendeth every sweetness. Here shalt thou see the one host and the other of Paradise, and one in the same aspects which thou shalt witness at the final judgment.",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    },
    { 
      id: 37,
      title: "Paradiso Canto XXXIII.82-84",
      description: "O abundant grace, whence I presumed to fix my look on the eternal light so long that I consumed my sight thereon!",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    },
    { 
      id: 38,
      title: "Paradiso Canto XXXIII.143-145",
      description: "Here vigor failed the high imagination: but now was turning my desire and will, even as a wheel that equally is moved, the Love which moves the sun and the other stars.",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    },
    { 
      id: 39,
      title: "Paradiso Canto XXXI.91-93",
      description: "My words fall far below the thing I saw, and now my mind shrinks from the memory, as weakness shrinks beneath too great a weight.",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    },
    { 
      id: 40,
      title: "Paradiso Canto XXXII.52-57",
      description: "Down through all that rose, from rank to rank, there is no soul that makes not a fair flower of this garden. For these are the leaves wherein the Rose of the eternal spring spreads layer on layer, that blooms forever in the rays of noon.",
      image: `/api/placeholder/fig${Math.floor(Math.random() * 20) + 1}`
    }
    // ... rest of your petalData array ...
  ]

    const createInteractivePetalLayer = (layerIndex: number, petalsInLayer: number, radius: number, height: number = 0) => {
      const petals = []
      for (let i = 0; i < petalsInLayer; i++) {
        const angle = (i / petalsInLayer) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        
        // Calculate ID starting from 1, incrementing through each layer
        // For first layer (outer), IDs will be 1-20
        // For second layer, IDs will be 21-40
        // For third layer, IDs will be 41-60
        const startIdForLayer = (layerIndex === 2) ? 1 : 
                              (layerIndex === 1) ? 21 : 
                              41;
        const petalId = startIdForLayer + i

        const currentPetalData = petalData.find(p => p.id === petalId) || {
          id: petalId,
          title: `Petal ${petalId}`,
          description: `Description for Petal ${petalId}`,
          image: "/api/placeholder/300/200"
        }

        petals.push(
          <Petal
            key={`layer${layerIndex}-petal${i}`}
            position={[x, height, z]}
            rotation={[Math.PI/2, Math.cos(angle)* Math.PI/12, angle - Math.PI/2]}
            scale={[0.25, 0.25, 0.25]}
            onClick={() => setSelectedPetal(selectedPetal === currentPetalData.id ? null : currentPetalData.id)}
            isSelected={selectedPetal === currentPetalData.id}
            petalData={currentPetalData}
            layer={layerIndex}
          />
        )
      }
      return petals
    }

  const createStaticPetalLayer = (layerIndex: number, petalsInLayer: number, radius: number, height: number = 0) => {
    const petals = []
    
    // Create petal shape
    const petalShape = new THREE.Shape()
    const petalRadius = 1
    const baseWidth = 1.2
    
    petalShape.moveTo(-baseWidth, 0)
    
    const segments = 48
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI
      const wave = Math.sin(theta * 4) * 0.1
      const x = Math.cos(theta) * baseWidth * (1 + wave)
      const y = Math.sin(theta) * petalRadius * (1 + Math.sin(theta) * 0.3) + Math.pow(Math.sin(theta), 2) * 0.5
      petalShape.lineTo(x, y)
    }
    
    petalShape.lineTo(-baseWidth, 0)

    // Create gradient texture
    const gradientTexture = useMemo(() => {
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 512
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 512)
        gradient.addColorStop(0, '#ffffff')
        gradient.addColorStop(0.2, '#fff5f6')
        gradient.addColorStop(0.4, '#ffe4e8')
        gradient.addColorStop(0.6, '#ffd1d9')
        gradient.addColorStop(0.75, '#ffb6c1')
        gradient.addColorStop(0.85, '#ff99a3')
        gradient.addColorStop(1, '#ff8b96')
        
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 512, 512)
      }
      return new THREE.CanvasTexture(canvas)
    }, [])

    // Create displacement texture
    const displacementTexture = useMemo(() => {
      const canvas = document.createElement('canvas')
      canvas.width = 256
      canvas.height = 256
      const ctx = canvas.getContext('2d')
      if (ctx) {
        for (let i = 0; i < 5; i++) {
          const gradient = ctx.createLinearGradient(128, 0, 128, 256)
          gradient.addColorStop(0, 'rgba(128, 128, 128, 0)')
          gradient.addColorStop(0.5, 'rgba(128, 128, 128, 0.2)')
          gradient.addColorStop(1, 'rgba(128, 128, 128, 0)')
          ctx.fillStyle = gradient
          ctx.fillRect(0, i * 51, 256, 20)
        }
      }
      return new THREE.CanvasTexture(canvas)
    }, [])

    for (let i = 0; i < petalsInLayer; i++) {
      const angle = (i / petalsInLayer) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      
      petals.push(
        <mesh
          key={`static-layer${layerIndex}-petal${i}`}
          position={[x, height, z]}
          rotation={[Math.PI/2, Math.cos(angle)* Math.PI/12, angle - Math.PI/2]}
          scale={[0.25, 0.25, 0.25]}
        >
          <extrudeGeometry
            args={[
              petalShape,
              {
                steps: 4,
                depth: 0.15,
                bevelEnabled: true,
                bevelThickness: 0.08,
                bevelSize: 0.06,
                bevelSegments: 24
              }
            ]}
          />
          <meshStandardMaterial
            map={gradientTexture}
            roughness={0.25}
            metalness={0.05}
            emissive={layerIndex % 2 === 0 ? "#ffffff" : "#ffe4e8"}
            emissiveIntensity={0.2}
            normalMap={displacementTexture}
            normalScale={new THREE.Vector2(0.4, 0.4)}
            side={THREE.DoubleSide}
          />
        </mesh>
      )
    }
    return petals
  }

  return (
    <group rotation={[0, 0, 0]}>
      <Center />
      {createInteractivePetalLayer(2, 20, 1)}         // Outer layer - interactive
      {createInteractivePetalLayer(1, 20, 0.8, 0.05)} // Second layer - interactive
      {createStaticPetalLayer(0, 18, 0.5, 0.1)}      // Static inner layers
      {createStaticPetalLayer(0, 8, 0.4, 0.15)}
      {createStaticPetalLayer(0, 6, 0.2, 0.13)}
      {createStaticPetalLayer(0, 4, 0.1, 0.1)}
      {createStaticPetalLayer(0, 4, 0, 0)}
      {createStaticPetalLayer(0, 4, 0.1, 0)}
    </group>
  )
}

const InstructionsPanel: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      zIndex: 1000
    }}>
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#F5E6D3',
            border: '2px solid #8B4513',
            color: '#4A2508',
            fontSize: '24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Crimson Text', serif",
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          i
        </button>
      ) : (
        <div style={{
          background: '#F5E6D3',
          border: '4px double #8B4513',
          padding: '20px',
          maxWidth: '350px',
          fontFamily: "'Crimson Text', serif",
          color: '#4A2508',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
          <button
            onClick={() => setIsMinimized(true)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              color: '#8B4513',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '5px'
            }}
          >
            ×
          </button>
          <h3 style={{
            margin: '0 0 15px 0',
            fontFamily: "'UnifrakturMaguntia', cursive",
            fontSize: '22px',
            borderBottom: '2px solid #8B4513',
            paddingBottom: '8px'
          }}>
            Instructions
          </h3>
          <p style={{
            margin: '0',
            fontSize: '16px',
            lineHeight: '1.6',
            textAlign: 'justify'
          }}>
            This is the Celestial rose of the Empyrean. You can spin it around (like the wheel of fortune). You can also zoom in and out using two fingers. The outer petals of the rose contain an exhibit exploring visual depictions of Dante's <i>Paradiso</i>, while the inner petals contain various excerpts from the cantica.
          </p>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Crimson+Text:wght@400;600&display=swap');
            `}
          </style>
        </div>
      )}
    </div>
  );
};

  
const Scene: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'linear-gradient(180deg, #000033 0%, #000066 35%, #000099 100%)', }}>
      <StarField />
      <EtherealLight />
      <InstructionsPanel />
      <PageTitle />
      <Canvas camera={{ position: [0, 8, 8], fov: 45 }}>
      <ambientLight intensity={2.0} /> // Increased from 1.5
      <SpotLight
        position={[5, 12, 5]}
        angle={0.8}
        penumbra={0.3}
        intensity={3.0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <SpotLight
        position={[-5, 12, -5]} // Raised height from 10
        angle={0.8} // Widened from 0.6
        penumbra={0.3} // Reduced from 0.5
        intensity={3.0} // Increased from 2.0
        castShadow
      />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={1.2} />
        <Lotus />
        <OrbitControls 
          minPolarAngle={Math.PI/4} 
          maxPolarAngle={Math.PI/2}
          enableZoom={true}
          enablePan={false}
          maxDistance={20}
          minDistance={5}
        />
      </Canvas>
    </div>
  )
}

export default Scene

