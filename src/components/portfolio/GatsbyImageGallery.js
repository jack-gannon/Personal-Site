import React, { useState } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { breakpoints } from "../../utils/breakpoints"
import { colors } from "../../utils/colors"

const GatsbyImageGallery = ({ images }) => {
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
        fluid={images[activeImgIndex].mainImage}
        alt={images[activeImgIndex].alt}
      />
      <Caption>{images[activeImgIndex].alt}</Caption>
      <SelectionPanel>
        {images.map((image, index) => (
          <SelectionItem
            key={image.src}
            onClick={() => handleSelectImage(index)}
            className={index === activeImgIndex ? "selected" : "deselected"}
          >
            <Thumbnail fluid={image.thumbImage} alt={image.alt} />
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

const DisplayedImage = styled(Image)`
  width: 100%;
  height: 16rem;
  margin-bottom: 0.5rem;
  border: 1px solid purple;
  object-fit: cover;

  @media (min-width: ${breakpoints.tablet.medium}) {
    height: 24rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    height: 38rem;
  }
`

const Caption = styled.p`
  text-align: center;
  font-size: 1.125rem;
  font-style: italic;
  margin-bottom: 1rem;
  color: ${colors.gray60};
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
  border: none;
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

  &.deselected {
    opacity: 0.5;
  }

  &.selected {
    opacity: 1;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 6rem;
    height: 6rem;
  }
`

const Thumbnail = styled(Image)`
  margin: 0rem;
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    opacity: 0.8;
  }
`

export default GatsbyImageGallery
