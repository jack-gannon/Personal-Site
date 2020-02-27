import React from "react"
import styled from "styled-components"

const DownloadResume = () => {
  const handleDownloadResume = () => {
    fetch("https://jackgannon.herokuapp.com/resume", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return <Button onClick={() => handleDownloadResume()}>Download Resume</Button>
}

const Button = styled.button``

export default DownloadResume
