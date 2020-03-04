import React from "react"
import FacebookShareIcon from "../../vectors/social-icons/share/FacebookShareIcon"

const FacebookShare = ({ url, title }) => {
  const params = `?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(
    title
  )}&display=page`
  const shareLink = "https://www.facebook.com/sharer/sharer.php" + params
  return (
    <a
      href={shareLink}
      target="_blank"
      rel="noopener noreferrer"
      className="share-facebook"
      title="Share on Facebook"
    >
      <FacebookShareIcon />
    </a>
  )
}

export default FacebookShare
