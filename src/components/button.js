import '../styling/auth.css'

const UniversalButton = (props) => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button
                style={{
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    alignItems: 'center',
                    width: props.width,
                    height: props.height,
                    marginTop: props.marginTop,
                    padding: props.padding,
                    fontFamily: props.fontFamily,
                    fontSize: props.fontSize,
                    letterSpacing: '0.08em',
                    color: props.color,
                    backgroundColor: props.bgcolor,
                }}
            >
                {props.href === '' ? props.text : <a href={props.href} style={{ color: '#ffffff' }}>{props.text}</a>}
            </button>
        </div>
    )
}

export default UniversalButton