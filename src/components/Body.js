// style
import './Body.css';
// imgs
import norway from './norway.jpg';
import russia from './russia.jpg';
// components
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

let Body = () => {
    return(
        <div id="body">
            <Header />
            <Article title="Mon Article sur la Norvège" img={norway}>La Norvège : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et praesentium ea. Minus, odit assumenda pariatur delectus rem asperiores magni, ipsam molestiae officia voluptatem officiis architecto porro maxime. Officiis quisquam rem doloribus totam voluptatibus hic, eveniet eligendi. A earum explicabo accusantium quo quod! Explicabo, voluptates ullam. Obcaecati, fugiat minima! Mollitia?</Article>
            <Article title="Mon Article sur la Russie" img={russia}>La Russie : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et praesentium ea. Minus, odit assumenda pariatur delectus rem asperiores magni, ipsam molestiae officia voluptatem officiis architecto porro maxime. Officiis quisquam rem doloribus totam voluptatibus hic, eveniet eligendi. A earum explicabo accusantium quo quod! Explicabo, voluptates ullam. Obcaecati, fugiat minima! Mollitia?</Article>
            <Footer />
        </div>
    );
};

export default Body;