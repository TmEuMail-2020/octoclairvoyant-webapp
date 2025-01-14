import { Flex, Box } from '@chakra-ui/react'
import * as React from 'react'

import Footer from '~/components/Footer'
import Header from '~/components/Header'

interface Props {
	children: React.ReactNode
	pageBgColor?: 'background2' | 'background3'
}

const Layout = ({ children, pageBgColor = 'background2' }: Props) => (
	<Flex height="100%" direction="column">
		<Header />
		<Box as="main" flex="1 0 auto" bgColor={pageBgColor}>
			{children}
		</Box>
		<Footer bgColor={pageBgColor} />
	</Flex>
)

export default Layout
