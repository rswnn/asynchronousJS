const noUrut = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 1000);
});

const pemenang = list => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const finalis = ['Riswan', 'Rizki', 'Faisal'];
            resolve(`pemenang no ${list} : ${finalis[0]}`);
        }, 1000, list);
    })
}

const juaraTerbaik = nama => {
    return new Promise((resolve, reject) => {
        setTimeout(nama => {
            const finalis = ['Riswan', 'Rizki', 'Faisal'];
            resolve(`${nama} dan ${finalis[0]} juara terbaik`);
        }, 1000, nama);
    })
}

noUrut
.then(no => {
    console.log(no);
    return pemenang(no[0]);
})
.then(hsl => {
    console.log(hsl);
    return juaraTerbaik('Bella');
})
.then(win => {
    console.log(win);
})
.catch(error => {
    console.log(error);
})