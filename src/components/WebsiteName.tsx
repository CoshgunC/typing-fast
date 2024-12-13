import React from 'react'
import { twMerge } from 'tailwind-merge'

const WebsiteName = ({ className }: {className?: string}) => {
  return (
	<div className={twMerge("text-4xl font-bold", className)}>
		<span className='text-zinc-200'>Typing</span>
		<span className='text-primary'>Fast</span>
	</div>
  )
}

export default WebsiteName