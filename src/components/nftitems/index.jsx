import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { nftData } from '../data'
import NftCard from './nftcard'

export default function NftDataList() {
    return (
        <SimpleGrid columns={[2, 3, 3, 4, 6]} gap={5} alignItems='center' justifyItems='center'>
            {nftData.map((item) => (
                <NftCard item={item} key={item.id} />
            ))}
        </SimpleGrid>
    )
}
