import React from "react"
import TwitterShareIcon from "../../vectors/social-icons/share/TwitterShareIcon"

const TwitterShare = ({ url, title }) => {
  const params = `?url=${encodeURIComponent(url)}&text=${encodeURIComponent(
    title
  )}`
  const shareLink = "https://twitter.com/share" + params
  return (
    <a
      href={shareLink}
      target="_blank"
      rel="noopener noreferrer"
      className="share-twitter"
      title="Share on Twitter"
    >
      <TwitterShareIcon />
    </a>
  )
}

export default TwitterShare
