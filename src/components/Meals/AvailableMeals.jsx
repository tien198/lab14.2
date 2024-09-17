import React from 'react';
import MealItem from '../../components/Meals/MealItem/MealItem';
import { useFetch } from '../../hooks/userFetch';

// css
import styles from './AvailableMeals.module.css'
import Card from '../UI/Card';


function AvailableMeals() {
    const { meals } = useFetch([])
    return (
        <div className={styles['meals']}>
            <Card>
                <ul >
                    {
                        meals.map(i => <MealItem item={i} key={i.id} />)
                    }
                </ul>
            </Card>
        </div>

    );
}

export default AvailableMeals;

