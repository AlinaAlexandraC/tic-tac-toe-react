import { Link } from "react-router-dom";
import './Menu.css';

const Menu = () => {
    return ( 
        <div className='menu-panel d-flex flex-column align-items-center p-5 rounded bg-white shadow mt-5'>
            <h1 className="mb-5">Tic-Tac-Toe</h1>
            <ul className='d-flex flex-column justify-content-center align-items-center menu'>
                <li className='my-3'> 
                    <Link to='/game-HvsH'>
                        <button className='btn-hero btn text-center'>
                            Human versus Human Mode
                        </button>
                    </Link>
                </li>
                <li className='my-3'> 
                    <Link to='/game-HvsAI'>
                        <button className='btn-hero btn text-center'>
                            Human versus AI Mode
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Menu;