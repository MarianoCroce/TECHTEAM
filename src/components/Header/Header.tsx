"use client";
import React from 'react';

export type HeaderProps = {
	// types...
}

const Header: React.FC<HeaderProps>  = ({}) => {
	return (
	
			<header className='w-full absolute inset-0'>
			  <img
				src='https://assets.glginsights.com/wp-content/uploads/2021/08/D1_Tech_HeaderImage.jpg'
				alt='fondo tech team'
				className='w-full h-full object-cover absolute inset-0'
			  />
		
			  <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'>
				<h1 className='text-9xl'>TECH TEAM</h1>
				<button type="button" className='bg-blue-500 text-white px-4 py-2 mt-4'>
				  Conoce más
				</button>
			  </div>
			</header>
		  );
  };

export default Header;
