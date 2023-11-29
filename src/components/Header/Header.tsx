"use client";
import React from 'react';

export type HeaderProps = {
	// types...
}

const Header: React.FC<HeaderProps>  = ({}) => {
	return (
		<header>
 			<button type="button">Conoce mas</button>
			<p>DESCRIPCION</p>
			<img src='' alt='fondo tech team'></img>
 		</header>
	);
};

export default Header;
