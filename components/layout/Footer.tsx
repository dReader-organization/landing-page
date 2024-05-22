import React from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export const Footer: React.FC = () => {
	return (
		<Box display='flex' flexDirection='column' gap={3} alignItems='center' padding={4}>
			<Box display='flex' gap={4}>
				<FooterLink href='https://dreader.app/privacy-policy' text='Privacy Policy' />
				<FooterLink href='mailto:support@dreader.io' text='Contact Support' />
			</Box>
			<Box className='copyright'>
				<Typography color='#777D8C' fontSize={['14px', '16px']} variant='body2'>
					{`© ${new Date().getFullYear()} dReader.`}&nbsp;All rights reserved.
				</Typography>
			</Box>
		</Box>
	)
}

const FooterLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
	return (
		<Link className='text--decoration-none ' href={href} rel='noreferrer' target='_blank'>
			<Typography component='span' color='white' fontSize={['14px', '16px']} lineHeight={['18.2px', '20.8px']}>
				{text}
			</Typography>
		</Link>
	)
}
