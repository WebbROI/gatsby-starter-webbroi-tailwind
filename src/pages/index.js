import React from "react"
import HomeContainer from "../containers/HomeContainer"
import HeadData from "../data/HeadData"
import FullHeaderImageBg from '../headers/FullHeaderImageBg'
import HeaderNav from '../navigation/HeaderNav'
import HeaderText from "../headers/HeaderText"
import HomeTwoColumnsSection from "../sections/HomeTwoColumnSection"

export default () => (
  <HomeContainer>
    <HeadData isHome />

    <FullHeaderImageBg>
      <HeaderNav isHome />
      <HeaderText
        title='New Gatsby Project'
        subTitle='Just another awesome project' 
        withButton
        buttonText='Learn More'
      />
    </FullHeaderImageBg>

    <HomeTwoColumnsSection />
  </HomeContainer>
)
