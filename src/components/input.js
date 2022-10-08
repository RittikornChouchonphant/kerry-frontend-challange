function UniversalInput({
    setParent,
    type = 'text',
    minLength,
    maxLength,
    pattern,
    legendSrc = '',
    label = 'Username',
    placeHolder = 'placeholder',
    required = 'false',
}) {
    return (
        <div style={{ marginBottom: '27px' }}>
            <p style={{ fontFamily: 'SukhumvitBold', fontSize: '14px', letterSpacing: '0.02em', color: '#4C4948', marginBottom: '8px' }}>{label}</p>
            <div className='frameinput'>
                <img src={legendSrc} alt='account' style={{ marginRight: '12px' }} />
                {required ?
                    <input onChange={(e) => setParent(e.target.value)} className='coreinput' type={type} placeholder={placeHolder} minLength={minLength} maxLength={maxLength} pattern={pattern} required /> :
                    <input onChange={(e) => setParent(e.target.value)} className='coreinput' type={type} placeholder={placeHolder} minLength={minLength} maxLength={maxLength} pattern={pattern} />
                }
            </div>
        </div>
    )
}

export default UniversalInput