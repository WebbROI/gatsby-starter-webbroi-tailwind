import React from "react"
import MainContainer from "../containers/MainContainer"
import HeadData from "../data/HeadData"
import FullHeaderImageBg from '../headers/FullHeaderImageBg'
import HeaderText from "../headers/HeaderText"

export default () => (
  <MainContainer>
    <HeadData 
      title='404 Page' 
      description='Page not found.' 
    />

    <FullHeaderImageBg>
      <HeaderText
        title='Page Not Found'
        subTitle='404 Page Error' 
        withButton
        buttonText='Home Page'
      />
    </FullHeaderImageBg>
  </MainContainer>
)
