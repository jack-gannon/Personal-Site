import React, { useState } from "react"
import styled from "styled-components"
import { breakpoints } from "../../utils/breakpoints"

const ImageGallery = ({ images }) => {
  // This component takes an array of objects as props
  // Each object has a src, and an alt
  // Both values are strings

  // Determines which image to display
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  const handleSelectImage = imageIndex => {
    setActiveImgIndex(imageIndex)
  }

  return (
    <Gallery>
      <DisplayedImage
        src={images[activeImgIndex].src}
        alt={images[activeImgIndex].alt}
      />
      <SelectionPanel>
        {images.map((image, index) => (
          <SelectionItem
            key={image.src}
            onClick={() => handleSelectImage(index)}
            className={index === activeImgIndex ? "selected" : "deselected"}
          >
            <img src={image.src} alt={image.alt} />
          </SelectionItem>
        ))}
      </SelectionPanel>
    </Gallery>
  )
}

const Gallery = styled.div`
  margin-bottom: 3rem;
  width: 100%;

  @media (min-width: ${breakpoints.tablet.medium}) {
  }
`

const DisplayedImage = styled.img`
  width: 100%;
  height: 40vh;
  margin-bottom: 0.5rem;
  border: 1px solid purple;
  object-fit: cover;
`

const SelectionPanel = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
`

const SelectionItem = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 0.25rem;
  border: 1px solid pink;
  margin-right: 0.5rem;
  transition: opacity 0.25s ease;

  &:hover {
    cursor: pointer;
    img {
      opacity: 0.8;
    }
  }

  &:last-child {
    margin-right: 0rem;
  }

  & img {
    margin: 0rem;
  }

  &.deselected {
    opacity: 0.5;
  }

  &.selected {
    opacity: 1;
  }
`

export default ImageGallery
