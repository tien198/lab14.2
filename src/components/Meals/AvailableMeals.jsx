import React from 'react';
import MealItem from '../../components/Meals/MealItem/MealItem';

// css
import styles from './AvailableMeals.module.css'
import Card from '../UI/Card';


function AvailableMeals({ DUMMY_MEALS }) {
    return (
        <div className={styles.meals}>
            <Card>
                <ul >
                    {
                        DUMMY_MEALS.map(i => <MealItem item={i} key={i.id} />)
                    }
                </ul>
            </Card>
        </div>

    );
}

export default AvailableMeals;

