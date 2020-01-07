import React, { useState } from "react"
import Animated from "react-native-reanimated"
import { useTransition, bInterpolate } from "react-native-redash"

import { Playground, SEO, IPhone } from "src/components"
import { MEDIA } from "src/styles"

const Animations = () => {
  const [isVisible, setVisible] = useState(true)
  const visibleAnimation = useTransition(isVisible)

  return (
    <>
      <SEO title="Animations" />

      <h1>Animations</h1>

      <h2>bInterpolate(node: Node, from: Node, to: Node): Node</h2>

      <p>Interpolate the node from 0 to 1 without clamping.</p>

      <Playground
        code={`
const [isVisible, setVisible] = useState(true)
const visibleAnimation = useTransition(isVisible)

return (
  <>
    <Button onPress={() => setVisible(!isVisible)}>
      {isVisible ? 'Hide text' : 'Show text'}
    </Button>

    <Animated.Text
      style={{ opacity: bInterpolate(visibleAnimation, 0, 1) }}
    >
      Hello world!
    </Animated.Text>
  </>
)
        `}
        device={
          <IPhone.SafeAreaView>
            <IPhone.Container>
              <IPhone.Button onPress={() => setVisible(!isVisible)}>
                {isVisible ? "Hide text" : "Show text"}
              </IPhone.Button>

              <Animated.Text
                style={{
                  paddingVertical: 10,
                  opacity: bInterpolate(visibleAnimation, 0, 1),
                }}
              >
                Hello world!
              </Animated.Text>
            </IPhone.Container>
          </IPhone.SafeAreaView>
        }
      />
    </>
  )
}

export default Animations
