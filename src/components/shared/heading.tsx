import React from 'react'
import { motion } from 'motion/react'

interface IHeadingProps {
	text: string
	className?: string
	position?: 'start' | 'center'
}
const Heading = ({ text, className, position }: IHeadingProps) => {
	let title = text.split(' ')
	return (
		<h1
			className={`${className} ${
				position === 'center' && 'text-center'
			}  w-full text-3xl md:text-5xl lg:text-6xl font-playfair-display`}
		>
    {text}
		</h1>
	)
}

export default Heading
