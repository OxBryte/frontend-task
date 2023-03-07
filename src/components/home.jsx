import React from 'react'
import NftDataList from './nftitems'
import PageLayout from './page-layout'
import ContainLayout from './page-layout/container'

function Home() {
  return (
    <PageLayout>
      <ContainLayout>
        <NftDataList />
      </ContainLayout>
    </PageLayout>
  )
}

export default Home