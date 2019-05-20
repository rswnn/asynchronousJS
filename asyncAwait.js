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

async function getPemenang () {
    const no =  await noUrut;
    console.log(no)
    
    const player = await pemenang(no[0]);
    console.log(player);

    const terbaik = await juaraTerbaik('Bella');
    console.log(terbaik);
}

getPemenang();