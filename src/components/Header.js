import logo from '../assets/GOT-icon.png'

const Header = () => {
    return (
        <header>
            <div className='header'>
                <img src={logo} alt='GOT Logo' />
                <h1>Under A Rock</h1>
                <img src={logo} alt='GOT Logo' />
            </div>
        </header>
    )
}

export default Header;