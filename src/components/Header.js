import './Header.css';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

let Header = () => {
    return(
        <header>
            <Navigation />
            <SearchBar />
        </header>
    );
};

export default Header;