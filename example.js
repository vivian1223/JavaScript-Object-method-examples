// 當遇到陣列包物件的資料格式時，有時候會需要透過物件 key 的值來進行判斷
// 此時我們就可以使用，Object.keys 將物件屬性列舉出來並進行比對

// task：找出有包含窗戶的房子
const houses = [
    {
        chair: 3,
        table: 1
    },
    {
        window: 3,
        table: 1
    },
]
const houseWithWindow = houses.filter(item => {
    return Object.keys(item).toString().includes('window');
})