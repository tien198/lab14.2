import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import headerImg from '../../assets/meals.jpg'
import MealsSummary from '../Meals/MealsSummary';

import styles from './Header.module.css'

function Header(props) {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={headerImg} alt='' />
            </div>
            <MealsSummary />
        </>
    );
}

export default Header;