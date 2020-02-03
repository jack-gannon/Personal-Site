import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { colors } from "../../utils/colors"

const RelatedPosts = ({ relatedPosts }) => {
  return (
    <section>
      <List>
        {relatedPosts.map(post => (
          <FeaturedPost key={post.node.fields.slug}>
            <Thumbnail
              fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <Contents>
              <Link to={`blog${post.node.fields.slug}`}>
                {post.node.frontmatter.title}
              </Link>
              <p>{post.node.frontmatter.description || post.node.excerpt}</p>
            </Contents>
          </FeaturedPost>
        ))}
      </List>
    </section>
  )
}

const List = styled.ul`
  margin-left: 0rem;
`

const FeaturedPost = styled.li`
  display: block;
  display: flex;
  width: 100%;
  margin-left: 0rem;
  border: 1px solid ${colors.gray30};
`
const Thumbnail = styled(Image)`
  flex-basis: 40%;
`

const Contents = styled.div`
  background-color: #fff;
  flex-basis: 60%;
  padding: 1rem;
`

export default RelatedPosts
