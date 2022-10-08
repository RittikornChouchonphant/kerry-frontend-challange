import { useEffect, useState, useRef } from 'react'
import validator from 'validator'
import UniversalInput from './input'
import '../styling/auth.css'
import UniversalButton from './button'

function UniversalCard({
    authStateSetter,
    cardwidth = '750px',
    cardheight = '820px',
    cardcolor = '#ffffff',
    header = 'Sign up',
}) {
    const childRef = useRef(null)
    const [childState, setChildState] = useState(false)

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [pass1, setPass1] = useState()
    const [pass2, setPass2] = useState()

    useEffect(() => {
        document.documentElement.style.setProperty('--cardwidth', cardwidth)
        document.documentElement.style.setProperty('--cardheight', cardheight)
        document.documentElement.style.setProperty('--cardcolor', cardcolor)
        authStateSetter(childState)
    }, [cardwidth, cardheight, cardcolor, authStateSetter, childState])

    const handleSignUp = () => {
        if (username !== undefined && email !== undefined && phone !== undefined && pass1 !== undefined && pass2 !== undefined && pass1 === pass2 && validator.isMobilePhone(phone, ['th-TH']) && validator.isEmail(email)) setChildState(true)
        else alert('Your input is invalid, please check your form correction.')
    }

    return (
        <div className='cardmaster'>
            <div style={{ display: 'grid', gridTemplateColumns: '60% auto', marginLeft: '77px', marginTop: '44px' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p style={{ fontFamily: 'SukhumvitText', fontSize: '24px', color: '#4C4948', marginRight: '0.2em' }}>Welcome to</p>
                    <a
                        style={{ fontFamily: 'SukhumvitText', fontSize: '24px', color: '#f58d50' }}
                        href='https://th.kerryexpress.com/th/home'
                    >
                        Kerry Express
                    </a>
                </div>
                <div>
                    <p style={{ fontFamily: 'SukhumvitLight', fontSize: '14px', color: '#8D8D8D', marginBottom: '-8px' }}>Have an account?</p>
                    <a style={{ fontFamily: 'SukhumvitLight', fontSize: '14px', color: '#f58d50', textDecoration: 'none' }} href='/'>Sign in</a>
                </div>
            </div>
            <p style={{ fontFamily: 'SukhumvitBold', fontSize: '58px', color: '#4C4948', marginLeft: '77px', marginBottom: '30px' }}>{header}</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <UniversalInput setParent={setUsername} type='text' legendSrc='/media/account.svg' label='Username and email' placeHolder='Username and email' required='true' />
                    <UniversalInput setParent={setEmail} type='email' legendSrc='/media/mail.svg' label='Username and email' placeHolder='Username and email' minLength='13' maxLength='50' required='true' />
                    <UniversalInput setParent={setPhone} type='text' legendSrc='/media/call.svg' label='Phone' placeHolder='Phone' minLength='10' maxLength='10' pattern='[0-9]{10}' required='true' />
                    <UniversalInput setParent={setPass1} type='text' legendSrc='/media/lock.svg' label='Password' placeHolder='Password' minLength='5' maxLength='50' required='true' />
                    <UniversalInput setParent={setPass2} type='text' legendSrc='/media/lock.svg' label='Confirm password' placeHolder='Confirm password' minLength='5' maxLength='50' required='true' />
                    <div ref={childRef} onClick={handleSignUp}>
                        <UniversalButton
                            text='Sign up'
                            width='111px'
                            height='44px'
                            marginTop='10px'
                            fontFamily='SukhumvitBold'
                            fontSize='16px'
                            color='#ffffff'
                            bgcolor='#F37024'
                            href=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniversalCard