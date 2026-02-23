const clone = (arr, fn) => {
    for (i = 0; i < arr.length; i++){
        fn(arr[i], i, arr)
    }
}

const idk = [1, 2, 3, 4, 5, 6]

clone(idk, (val, ind, arr) =>{
    console.log(val, ind, arr)
})