import React, { useState } from 'react'
import './carousel.css'

export const Carousel = () => {
  const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
  const [activeIndex, setActiveIndex] = useState(0)

  const carousel = items.map((item) => {
    return (
      <div
        key={item}
        className="carouselItem"
        style={{ color: `${items[activeIndex] === item ? '#ff0000' : '#000000'}` }}>
        {item}
      </div>
    )
  })

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= carousel.length) {
      newIndex = carousel.length - 1
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className="carouselContainer">
      <div className="carousel">
        <div className="inner" style={{ transform: `translateX(-${activeIndex * 200}px)` }}>
          {carousel}
        </div>
      </div>
      <input
        type="range"
        defaultValue={0}
        min={0}
        max={carousel.length - 1}
        onChange={(e) => {
          updateIndex(e.currentTarget.value)
        }}
      />
    </div>
  )
}
