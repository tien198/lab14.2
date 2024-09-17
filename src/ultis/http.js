export async function getMeals() {
    const respond = await fetch('https://httprequestproj-default-rtdb.asia-southeast1.firebasedatabase.app/lab14-2/meals.json')
    const mealsObj = await respond.json()
    const mealsArr = Object.entries(mealsObj).map(([id, meal]) => (meal))
    return mealsArr
}