import React from "react"
import LinkedInShareIcon from "../../vectors/social-icons/share/LinkedInShareIcon"

const LinkedInShare = ({ url, title, description }) => {
  const params = `?url=${encodeURIComponent(url)}&title=${encodeURIComponent(
    title
  )}&summary=${encodeURIComponent(description)}`
  const shareLink = "https://linkedin.com/shareArticle" + params
  return (
    <a
      href={shareLink}
      target="_blank"
      rel="noopener noreferrer"
      className="share-linkedin"
      title="Share on LinkedIn"
    >
      <LinkedInShareIcon />
    </a>
  )
}

export default LinkedInShare
