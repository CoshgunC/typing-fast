import React from 'react'
import WebsiteName from '../WebsiteName'
import Link from 'next/link'
import { GithubIcon } from 'lucide-react'
import { SignInButton, SignUpButton } from '@clerk/nextjs'

const Navbar = () => {
	return (
		<nav className='w-full flexBox justify-start space-x-4 p-4'>
			<Link href="/">
				<WebsiteName className='ml-8' />
			</Link>
			<ul className='flex w-1/3 p-4'>
				<li className='text-zinc-400 p-4 hover:text-zinc-200 rounded-md hover:bg-zinc-400/20 cursor-pointer'>
					<Link href="">
						<div className='flex space-x-3'>
							<GithubIcon />
							<span className=''>Source Code</span>
						</div>
					</Link>
				</li>
			</ul>
			<SignInButton>
				<button className='btn-primary'>
					Sign In
				</button>
			</SignInButton>
			<SignUpButton>
				<button className='btn-secondary'>
					Sign In
				</button>
			</SignUpButton>
		</nav>
	)
}

export default Navbar