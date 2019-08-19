import React from "react"
import MainContainer from "../containers/MainContainer"
import HeadData from "../data/HeadData"
import OneColumnPageLayout from "../layouts/OneColumnPageLayout";
import ContactForm from "../forms/ContactForm"

export default () => (
  <MainContainer>
    <HeadData 
      title='Contact Page' 
      description='Just another contact page' 
    />

    <OneColumnPageLayout>
      <h2 className='font-display text-4xl text-center'>Hello. We’ve been expecting you.</h2>

      <p className='text-center'>Fill in the form, or, if you prefer, <a href='mailto:val@webbroi.dev'>send us an email</a>.</p>
    </OneColumnPageLayout>

    <ContactForm />
  </MainContainer>
)
