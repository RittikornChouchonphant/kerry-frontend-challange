import { useCallback, useEffect, useState } from 'react'
import '../styling/auth.css'
import UniversalCard from '../components/card'
import UniversalButton from '../components/button'

function KerryAuth({
    color1 = '#f58d50',
    color2 = '#f0f0f0',
}) {
    const [isAuth, setIsAuth] = useState(false)
    const wrapperSetIsAuth = useCallback(val => {
        setIsAuth(val)
    }, [setIsAuth])

    useEffect(() => {
        document.documentElement.style.setProperty('--universal-width', window.innerWidth + 'px')
        document.documentElement.style.setProperty('--universal-height', window.innerHeight + 'px')
        document.documentElement.style.setProperty('--color1', color1)
        document.documentElement.style.setProperty('--color2', color2)
    }, [color1, color2, isAuth])

    return (
        <div className='authmaster'>
            <div className='authbg'>
                <img src='/media/logo.svg' alt='Kerry' />
            </div>
            {!isAuth &&
                <div className='authcard'>
                    <UniversalCard
                        isAuth={isAuth}
                        authStateSetter={wrapperSetIsAuth}
                        cardwidth='750px'
                        cardheight='820px'
                        cardcolor='#ffffff'
                        header='Sign up'
                    />
                </div>
            }
            {isAuth &&
                <div className='authcard'>
                    <div
                        className='cardmaster'
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '45px 60px 0px 60px', height: '750px' }}
                    >
                        <img src='/media/flat.svg' alt='greetings' />
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '16px', marginBottom: '16px' }}>
                            <p style={{ fontFamily: 'SukhumvitText', fontSize: '24px', color: '#4C4948', marginRight: '0.2em' }}>Welcome to</p>
                            <a
                                style={{ fontFamily: 'SukhumvitText', fontSize: '24px', color: '#f58d50' }}
                                href='https://th.kerryexpress.com/th/home'
                            >
                                Kerry Express
                            </a>
                        </div>
                        <p style={{ fontFamily: 'SukhumvitBold', fontSize: '58px', color: '#4C4948' }}>Kerry1234</p>
                        <UniversalButton
                            text='Back to home'
                            width='170px'
                            height='44px'
                            marginTop='16px'
                            fontFamily='SukhumvitBold'
                            fontSize='16px'
                            color='#ffffff'
                            bgcolor='#F37024'
                            href='https://th.kerryexpress.com/th/home'
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default KerryAuth