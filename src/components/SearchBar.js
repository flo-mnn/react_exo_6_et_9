import './SearchBar.css';

let SearchBar = () => {
    return(
        <div className="search">
            <label htmlFor="search">Recherche</label>
            <input type="text" className="text-input"/>
            <input type="submit" className="search-btn"value="Chercher"/>
        </div>
    ); 
};

export default SearchBar;