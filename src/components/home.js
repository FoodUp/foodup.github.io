import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import ItemList from './itemList';

//global style
import '../style/App.css';
// explict style
import { nav, logo, chef, list } from '../style/components/header.css';
import { container } from '../style/shared/common.css';
const Home = (props) => {
    return (
        <div>
            <header>
                <nav className={nav}>
                    <div className={`${logo}` }></div>
                    <SearchBar history = {props.history} />
                    <Link to="/shoppinglist" className={ list }></Link>
                    <div className={ chef }></div>                    
                </nav>
            </header>
            <div className="container">
                <ItemList />
            </div>
        </div>
    );
}
export default Home;