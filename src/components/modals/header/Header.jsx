import React from 'react'

function Header() {
  return (
    <header className='header container'>
        <h1 className="logo">Landing</h1>
        <div className='header__links'>
            <ul className="nav">
                <li className="nav__item nav__item-clothes"><a href="#Clothes" className="nav__link">Clothes</a></li>
                <li className="nav__item nav__item-sneakers"><a href="#Sneakers" className="nav__link">Sneakers</a></li>
                <li className="nav__item nav__item-bags"><a href="#Bags" className="nav__link">Bags</a></li>
                <li className="nav__item nav__item-accessorize"><a href="#Accessorize" className="nav__link">Accessorize</a></li>
            </ul>
            <a href="#Buy" className="header__button">Buy <span className='header__button-flare'></span></a>
        </div>
    </header>
  )
}

export default Header