import { Link } from 'react-router-dom';
import './InGameMenu.css';
import logo from '../../assets/tic-tac-toe.svg';

const InGameMenu = () => {
    return (
        <div className='w-50 d-flex justify-content-between align-items-center'>
            <Link to='/'>
                <button className='btn-hero btn'>Menu</button>
            </Link>
            <Link to='/'>
                <img className='game-logo' src={logo} alt='tic-tac-toe-logo' />
            </Link>
            <Link to='/rules'>
                <button className='btn-hero btn'>Rules</button>
            </Link>
        </div>
    );
};

export default InGameMenu;