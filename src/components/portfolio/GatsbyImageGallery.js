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
  const [showCaption, setShowCaption] = useState(false)

  const handleSelectImage = imageIndex => {
    setActiveImgIndex(imageIndex)
  }

  const toggleShowCaption = () => {
    setShowCaption(!showCaption)
  }

  return (
    <Gallery>
      <DisplayedImage
        fluid={images[activeImgIndex].mainImage}
        alt={images[activeImgIndex].alt}
      />
      <CaptionToggle
        title={showCaption ? "Hide Captions" : "Show Captions"}
        className={showCaption ? "active" : "inactive"}
        onClick={() => toggleShowCaption()}
      >
        {showCaption ? "×" : "⋯"}
      </CaptionToggle>
      <Caption className={showCaption ? "active" : "inactive"}>
        {images[activeImgIndex].caption}
      </Caption>
      <SelectionPanel>
        {images.map((image, index) => (
          <SelectionItem
            key={index}
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

const Gallery = styled.figure`
  position: relative;
  display: block;
  margin-bottom: 1rem;
  width: 100%;

  @media (min-width: ${breakpoints.tablet.medium}) {
    margin-bottom: 1rem;
  }
`

const DisplayedImage = styled(Image)`
  width: 100%;
  height: 16rem;
  margin-bottom: 0.5rem;
  object-fit: cover;
  border: 1px solid ${colors.gray20};

  @media (min-width: ${breakpoints.tablet.medium}) {
    height: 24rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    height: 38rem;
  }
`

const CaptionToggle = styled.button`
  position: absolute;
  border-radius: 4px;
  top: 14rem;
  left: 0.25rem;
  width: 2em;
  height: 1.5em;
  text-align: center;
  background-color: ${colors.gray10};
  border: 1px solid ${colors.gray30};
  z-index: 2;
  font-size: 18px;
  padding: 0.25em;
  line-height: 0rem;

  &.active {
    width: 1.5em;
  }

  &.inactive {
    width: 2em;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    top: 21.75rem;
    left: 0.5rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    top: 36rem;

    &.active {
      height: 2em;
      top: 35.5rem;
      width: 2em;
    }
  }

  &:hover {
    opacity: 0.65;
    cursor: pointer;
  }

  &:focus {
    outline-color: ${colors.primary};
  }
`

const Caption = styled.figcaption`
  position: absolute;
  top: 13.5rem;
  right: 0rem;
  width: 100%;
  z-index: 1;
  font-family: "Helvetica Neue", sans-serif;
  text-align: center;
  font-size: 0.875rem;
  color: ${colors.gray60};
  background-color: ${colors.gray10};
  border: 1px solid ${colors.gray20};
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;

  &.active {
    visibility: visibile;
  }

  &.inactive {
    visibility: hidden;
  }

  @media (min-width: ${breakpoints.tablet.medium}) {
    top: 21.125rem;
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    top: 35.25rem;
  }
`

const SelectionPanel = styled.div`
  display: flex;
  justify-content: center;
`

const SelectionItem = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 0rem;
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
    opacity: 0.3;

    &:hover * {
      opacity: 0.8;
    }
  }

  &.selected {
    opacity: 1;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    width: 6rem;
    height: 6rem;
  }

  &:focus {
    outline-color: ${colors.primary};
  }
`

const Thumbnail = styled(Image)`
  margin: 0rem;
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
  }
`

export default GatsbyImageGallery
