import React from "react"
import MainContainer from "../containers/MainContainer"
import HeadData from "../data/HeadData"
import PageHeaderImageBg from '../headers/PageHeaderImageBg'
import HeaderText from "../headers/HeaderText"
import OneColumnPageLayout from "../layouts/OneColumnPageLayout";

export default () => (
  <MainContainer>
    <HeadData 
      title='Sample Page' 
      description='Just another sample page' 
    />

    <PageHeaderImageBg>
      <HeaderText
        title='Sample Page'
        subTitle='Just another sample page'
      />
    </PageHeaderImageBg>

    <OneColumnPageLayout>
      <h2 className='font-display text-4xl'>Lorem Ipsum</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non nibh eget urna auctor pretium at vel orci. Aliquam at nisi sed neque rhoncus feugiat. Nunc elit massa, ullamcorper sit amet diam non, ornare convallis ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ante id laoreet scelerisque. Duis non mi vitae metus semper commodo. Mauris finibus mattis felis ac rhoncus. Proin finibus nulla facilisis enim auctor bibendum. Pellentesque pellentesque, ipsum in aliquam condimentum, ante lectus bibendum elit, a egestas ligula risus quis metus. Mauris mollis elit quam, ac vulputate lacus scelerisque et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean neque tortor, iaculis sed pulvinar at, elementum quis nisi. Donec sit amet mattis lorem. Nunc aliquet euismod nisi quis dapibus. Etiam interdum, lorem at eleifend ornare, massa mi dictum leo, ut fringilla nulla purus mattis urna. Phasellus sit amet interdum nisi, at varius dolor.</p>

      <p>Duis molestie metus auctor, sagittis quam in, congue ipsum. Phasellus mauris eros, suscipit non volutpat sit amet, sagittis sit amet orci. Quisque risus libero, posuere eget consectetur eget, consequat non nisl. Phasellus sit amet volutpat ex. Proin non consectetur urna, eu mattis risus. Nullam sed orci dignissim, eleifend justo ut, iaculis massa. Donec dapibus, turpis vitae luctus feugiat, purus nunc laoreet turpis, cursus sagittis nisl urna vel nisl. Nullam ullamcorper finibus magna. Nullam pharetra lacus nec orci hendrerit auctor. Sed nec tempor risus. Fusce vitae diam lobortis, mollis arcu sed, tristique risus. Etiam volutpat faucibus pharetra. Integer ac orci metus. Sed quis nisi in purus hendrerit luctus eu id mauris. Donec feugiat fringilla neque, et tempor ligula bibendum sit amet.</p>
    </OneColumnPageLayout>
  </MainContainer>
)
