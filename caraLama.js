const pemenang = () => {
    setTimeout(() => {
        const nominasi = [1, 2, 3, 4];
        console.log(nominasi);
        
        setTimeout((id) => {
            const finalis = ['Riswan', 'Rizki', 'Faisal'];
            console.log(`Pemenang no ${id} : ${finalis[0]}`);

            setTimeout((id) => {
                const finalisDua = ['Bella', 'Fitri', 'hesti'];
                console.log(`${id} dan ${finalisDua[0]} pemain terbaik`);
            }, 1000, finalis[0]);
        }, 1000, nominasi[0]);
    }, 1000);
}
pemenang();