import React from 'react'
import ImageSlider from './Components/ImageSlider'
const App = () => {
  return (
    <>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  )
}

export default App