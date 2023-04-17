import { ReactComponent as Line } from 'svg/line.svg'
import { ReactComponent as Android } from 'svg/android.svg'
import { ReactComponent as Apple } from 'svg/apple.svg'
import React from 'react'

function Main() {
  return (
    <main className='main'>
        <Line className="main__line" />
        <div className='main__text-block container'>
            <div className="main__ad ad">
                <div className='ad__icon-block'>
                    <div className='ad__icon-group'>
                        <a href='#Mobile' className='ad__icon-apple'>
                            <Apple className='ad__icon apple'/>
                        </a>
                        <a href='#Mobile' className='ad__icon-android'>
                            <Android className='ad__icon android'/>
                        </a>
                    </div>
                    <p className="ad__icon-text">App available</p>
                </div>
                <p className="ad__choice-text">CHOOSE YOUR WINTER <span className="ad__green-text">LOOK</span><span className='star'> *</span> APPAREL</p>
            </div>
            <div className='main__create-block'>
                <div className="main__create-text">CR<br />EA<br />TE</div>
            </div>
        </div>
    </main>
  )
}

export default Main