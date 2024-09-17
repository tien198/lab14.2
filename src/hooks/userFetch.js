import React, { useState, useEffect } from 'react';
import { getMeals } from '../ultis/http';

export function useFetch(initialVal) {
    const [meals, setMeals] = useState(initialVal)
    useEffect(() => {
        async function fetchMeals() {
            try {
                const fetchedMeals = await getMeals()
                setMeals(fetchedMeals)
            }
            catch (err) {
                console.warn('fail to fetch')
            }
        }
        fetchMeals()
    }, [])

    return {
        meals,
        setMeals
    }
}