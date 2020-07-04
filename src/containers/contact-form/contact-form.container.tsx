import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

import { Form, FormRow, FormTextInput, FormTextAreaInput, FormSubmit } from '@components/form'

type ContactFormInputs = {
  name: string
  email: string
  message: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
})

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm<ContactFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <Form name="contact" onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <FormTextInput ref={register} label="name" width="half" className="mb-4 md:mb-0" />
        <p>{errors.name?.message}</p>
        <FormTextInput ref={register} label="email" width="half" />
        <p>{errors.email?.message}</p>
      </FormRow>

      <FormRow>
        <FormTextAreaInput ref={register} label="message" />
        <p>{errors.message?.message}</p>
      </FormRow>

      <FormSubmit text="Submit" />
    </Form>
  )
}

export default ContactForm
