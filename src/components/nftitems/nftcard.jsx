import { Box, Flex, Text, VStack, Stack, AccordionButton, AccordionPanel, AccordionItem, AccordionIcon, Accordion, Button, } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { FaCertificate } from 'react-icons/fa'
import { shortenText } from '../../utils/shortenText'

export default function NftCard({ item }) {

    const [openModal, setOpenModal] = useState(false)

    return (
        <Box>
            <Box minW='200px' rounded='20px' w='fit-content' overflow='hidden' boxShadow="0px 18px 88px -4px #18274B24, 0px 3px 10px -6px #18274B1F" _hover={{ transform: 'scale(1.03)' }} onClick={() => { setOpenModal(true) }} cursor='pointer' >
                <Box>
                    <img src={item.nft_image} alt="" width={250} />
                </Box>
                <Flex flexDir='column' p='15px' gap='5px' bg='white'>
                    <Flex align='center' justify='space-between' fontWeight='600'>
                        <Text>{item.collection} {item.nft_id}</Text>
                        <Text>{item.current_price}</Text>
                    </Flex>
                    <Text color='gray.400' fontWeight='500'>Last price: {item.last_price}</Text>
                </Flex>
            </Box>

            {/* Modal to target each Nft Card */}

            {
                openModal && (
                    <Flex align='center' justify='center' w='full' height='100vh' backdropFilter='blur(5px)' bg='blackAlpha.100' position='fixed' top='0' left='0' p={5} >
                        <Flex w='full' h='full' onClick={() => { setOpenModal(false) }} />
                        <Stack direction={['column', 'column', 'row']} bg='white' p='20px' rounded='20px' gap='20px' position='absolute'>
                            <Box maxW={400} overflow='hidden' rounded={10}>
                                <img src={item.nft_image} alt="" />
                            </Box>
                            <VStack gap='10px' align='left' justify='flex-start'>
                                <VStack align='left'>
                                    <Flex align='center' gap='5px' fontWeight='700' fontSize='18px' color='blue.500'>{item.collection} <FaCertificate /></Flex>
                                    <Flex alignItems='center' justifyContent='space-between'>
                                        <Text fontSize='20px'>{item.collection}{item.nft_id}</Text>
                                        <Text fontSize='14px' color='blue.500'>{shortenText(item.owner_address, 10)}</Text>
                                    </Flex>
                                </VStack>

                                {/* Accordion */}

                                <VStack align='left' justify='space-between' h='full'>
                                    <Accordion allowToggle w={350} defaultIndex={[0]}>
                                        <AccordionItem border='none' mb='5px'>
                                            <h2>
                                                <AccordionButton border='1px' rounded='7px' borderColor='blackAlpha.200'>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        About
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel border='1px' rounded='7px' mt='5px' borderColor='blackAlpha.200' pb={4} fontSize='14px'>
                                                {item.description}
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem border='none' mb='5px'>
                                            <h2>
                                                <AccordionButton border='1px' rounded='7px' borderColor='blackAlpha.200'>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        Details
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel border='1px' rounded='7px' mt='5px' borderColor='blackAlpha.200' pb={4} fontSize='14px'>
                                                <Flex justify='space-between'>
                                                    <Text>Token address</Text>
                                                    {shortenText(item.token_address, 10)}
                                                </Flex>
                                                <Flex justify='space-between'>
                                                    <Text>Owner</Text>
                                                    {shortenText(item.owner_address, 10)}
                                                </Flex>
                                                <Flex justify='space-between'>
                                                    <Text>Last price</Text>
                                                    {item.last_price}
                                                </Flex>
                                                <Flex justify='space-between'>
                                                    <Text>Royalties</Text>
                                                    <Text>5%</Text>
                                                </Flex>
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem border='none' mb='5px'>
                                            <h2>
                                                <AccordionButton border='1px' rounded='7px' borderColor='blackAlpha.200'>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        Attributes
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel border='1px' rounded='7px' mt='5px' borderColor='blackAlpha.200' pb={4} fontSize='14px'>
                                                <Flex gap='10px' flexWrap='wrap'>
                                                    <VStack align='left' p='10px' bg='gray.100' rounded='5px'>
                                                        <Text fontSize='12px'>Background</Text>
                                                        <Text fontWeight='700'>Off White D</Text>
                                                    </VStack>
                                                    <VStack align='left' p='10px' bg='gray.100' rounded='5px'>
                                                        <Text fontSize='12px'>Head</Text>
                                                        <Text fontWeight='700'>Off White D</Text>
                                                    </VStack>
                                                    <VStack align='left' p='10px' bg='gray.100' rounded='5px'>
                                                        <Text fontSize='12px'>Shirt</Text>
                                                        <Text fontWeight='700'>Off White D</Text>
                                                    </VStack>
                                                </Flex>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                    <Box as='a' href={`${item.opensea}`} target='_blank'>
                                        <Button w='full' bg='blue.500' color='white' _hover={{ bg: 'blue.200', color: 'black' }}>Buy on opensea</Button>
                                    </Box>
                                </VStack>
                            </VStack>
                        </Stack>
                    </Flex>
                )
            }

        </Box>
    )
}
