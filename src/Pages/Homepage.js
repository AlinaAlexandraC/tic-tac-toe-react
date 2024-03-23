import logo from '../assets/tic-tac-toe.svg';
import Menu from '../Components/Menu/Menu';

const Homepage = () => {
    return ( 
        <div className="homepage d-flex flex-column justify-content-center align-items-center">
            <img src={logo} alt="" className="game-logo" />
            <Menu />
        </div>
    );
}
 
export default Homepage;