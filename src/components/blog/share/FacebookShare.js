import React from "react"

const FacebookShare = ({ url, title }) => {
  const params = `?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(
    title
  )}&display=page`
  const shareLink = "https://www.facebook.com/sharer/sharer.php" + params
  return (
    <a href={shareLink} target="_blank" rel="noopener noreferrer">
      Facebook
    </a>
  )
}

export default FacebookShare
