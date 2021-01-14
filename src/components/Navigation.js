import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component {

    

    changeLog = (log) => {
        console.log(log);
    };

    render(){

        return(
            <nav>
            <a href="#" onClick={() => this.changeLog('Accueil')}><span>Home</span></a>
            <a href="#" onMouseOver={()=> this.changeLog('Galerie')}><span>Blog</span></a>
            <a href="#" onDoubleClick={()=>this.changeLog('Contact')}><span>Contact</span></a>
        </nav>
        );
    }
};

export default Navigation;