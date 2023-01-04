//use localstorage to store data
export const getStoredTime = () => {
    let exerciseCart = '';
    const stroedTime = localStorage.getItem('break-time');
    if (stroedTime) {
        exerciseCart = JSON.parse(stroedTime);
    }
    return exerciseCart;
}
