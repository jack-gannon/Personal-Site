import React, { useState } from "react"
import styled from "styled-components"
import { useFormik } from "formik"
import { colors } from "../../utils/colors"
import { breakpoints } from "../../utils/breakpoints"
import FormStatusDisplay from "./FormStatusDisplay"

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = "Required Field"
  } else if (values.name.length > 30) {
    errors.name = "Must be 50 characters or less"
  } else if (values.name.length < 5) {
    errors.name = "Must be at least 5 characters"
  }

  if (!values.email) {
    errors.email = "Required Field"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  if (!values.message) {
    errors.message = "Required Field"
  } else if (values.message.length < 25) {
    errors.message = "Message must be at least 25 characters long"
  } else if (values.message.length > 1500) {
    errors.message = "Message must be less than 1500 characters"
  }

  return errors
}

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [isError, setError] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: values => {
      setLoading(true)
      fetch("https://jackgannon.herokuapp.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then(response => {
          if (response.status === 200) {
            setSuccess(true)
            setLoading(false)
          }
        })
        .catch(error => {
          setError(true)
          setLoading(false)
        })
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <NameEmailFields>
        <div>
          <Label htmlFor="name">Name</Label>
          <TextInput
            id="name"
            name="name"
            type="text"
            isError={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          ></TextInput>
          {formik.touched.name && formik.errors.name ? (
            <ErrorMsg>{formik.errors.name}</ErrorMsg>
          ) : null}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <TextInput
            id="email"
            name="email"
            type="email"
            isError={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></TextInput>
          {formik.touched.email && formik.errors.email ? (
            <ErrorMsg>{formik.errors.email}</ErrorMsg>
          ) : null}
        </div>
      </NameEmailFields>
      <Label htmlFor="message">Message</Label>
      <TextArea
        id="message"
        name="message"
        type="text"
        isError={formik.touched.message && formik.errors.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      ></TextArea>
      {formik.touched.message && formik.errors.message ? (
        <ErrorMsg>{formik.errors.message}</ErrorMsg>
      ) : null}

      {isLoading ? (
        <FormStatusDisplay statusType="loading" />
      ) : isError ? (
        <FormStatusDisplay statusType="error" />
      ) : isSuccess ? (
        <FormStatusDisplay statusType="success" />
      ) : (
        <SubmitButton type="submit">Submit</SubmitButton>
      )}
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  margin-bottom: 0rem;
  font-family: "Helvetica Neue", sans-serif;
  @media (min-width: ${breakpoints.desktop.small}) {
  }
`

const NameEmailFields = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.desktop.small}) {
    flex-direction: row;

    * {
      flex-basis: 50%;
    }

    *:first-child {
      margin-right: 1rem;
    }
  }
`

const Label = styled.label`
  display: block;
  color: ${colors.gray70};
`

const TextInput = styled.input.attrs(props => ({
  isError: props.isError,
}))`
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.isError ? "red" : colors.gray30)};
  border-radius: 2px;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
`

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  margin-bottom: ${props => (props.isError ? "0.5rem" : "1rem")};
  height: 8rem;
  border: 1px solid ${props => (props.isError ? "red" : colors.gray30)};
  border-radius: 2px;
  padding-left: 0.5rem;
`

const ErrorMsg = styled.p`
  font-size: 0.75rem;
  line-height: 0.5rem;
  margin-bottom: 0rem;
  color: red;
`

const SubmitButton = styled.button`
  display: block;
  background-color: ${colors.primary};
  color: #fff;
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 2px;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (min-width: ${breakpoints.desktop.small}) {
    float: right;
    width: 12rem;
  }
`

export default ContactForm
