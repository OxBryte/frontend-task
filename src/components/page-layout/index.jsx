import { Box } from '@chakra-ui/react';

const PageLayout = Pageprops => {
  return (
    <>
        <Box mx="auto" py={{ base: '4', md: '6', lg: '8' }}>
          {Pageprops.children}
        </Box>
    </>
  );
};

export default PageLayout;
