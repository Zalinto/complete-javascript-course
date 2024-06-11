// // // 'use strict';

// // // // // navigator.geolocation.getCurrentPosition(position => {
// // // // //     console.log(position);
// // // // // }, err => console.log(err));

// // // // const getPosition =  function() {
// // // //     return new Promise(function(resolve, reject) {
// // // //         navigator.geolocation.getCurrentPosition(resolve, reject);
// // // //     })
// // // // }

// // // // // getPosition().then(function(data) {
// // // // //     console.log(data);
// // // // // });

// // // // // getPosition().then(pos => console.log(pos));

// // // // const whereAmI = function () {
// // // //     getPosition().then(pos => {
// // // //         const { latitude: lat, longitude: lng } = pos.coords;

// // // //         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// // // //     }).then(res => {
// // // //             if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// // // //             return res.json();
// // // //         })
// // // //         .then(data => {
// // // //             console.log(data);
// // // //             console.log(`You are in ${data.city}, ${data.country}`);
    
// // // //             return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
// // // //         })
// // // //         .then(res => {
// // // //             if (!res.ok) throw new Error(`Country not found (${res.status})`);
    
// // // //             return res.json();
// // // //         })
// // // //         .then(data => renderCountry(data[0]))
// // // //         .catch(err => console.error(`${err.message} 💥`));
// // // // };

// // // // whereAmI();

// // // const wait = function (seconds) {
// // //     return new Promise(function (resolve) {
// // //       setTimeout(resolve, seconds * 1000);
// // //     });
// // // };

// // // const imgContainer = document.querySelector('.images');

// // // const createImage = function(imgPath) {
// // //     return new Promise(function(resolve, reject) {
// // //         const img = document.createElement('img');
// // //         img.src = imgPath;

// // //         img.addEventListener('load', function() {
// // //             imgContainer.append(img);
// // //             resolve(img);
// // //         });

// // //         img.addEventListener('erorr', function() {
// // //             reject(new Error('Image not found'));
// // //         });
// // //     });
// // // };

// // // let currentImg;

// // // createImage('img/img-1.jpg').then(function(img) {
// // //     currentImg = img;
// // //     console.log('Image 1 has loaded');
// // //     return wait(2)
// // // }).then(() => {
// // //     currentImg.style.display = 'none';
// // //     return createImage('img/img-2.jpg');
// // // }).then(() => {
// // //     currentImg = img;
// // //     console.log('Image 2 has loaded');
// // //     return wait(2);
// // // }).then(() => {
// // //     currentImg.style.display = 'none';
// // // }).catch(err => console.log(err));

// // // make code look sync 
// // const whereAmI = async function(country) {
// //     try{
// //         const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`); // wait for the result of the promise in the bg
// //         if(!res.ok) {
// //             throw new Error(`Error fetching ${res.status}`);
// //         }
// //         const data = await res.json();
// //         console.log("country data:", data);
// //     } catch(error) {
// //         console.log(error);
// //     } 
// // }
// // whereAmI('portugal');
// // console.log('nigga');

// Promise.any([
//     Promise.resolve('Success'),
//     Promise.resolve('ERROR'),
//     Promise.resolve('Another Success')
// ]).then(res => console.log(res));

const wait = function (seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  };
  
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
        imgContainer.append(img);
        resolve(img);
        });

        img.addEventListener('error', function () {
        reject(new Error('Image not found'));
        });
    });
};

let currentImg;

// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));

const loadNPause = async function() {
    try {
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';
        
        img = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
    } catch (err) {
        console.log(err);
    }
};

// loadNPause();   

const loadAll = async function(imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img)); // returns promises since async functions return promises
        const imgsAll = await Promise.all(imgs);
        imgsAll.forEach(img => {
            console.log(img), 
            img.classList.add('parallel')
        });
    } catch (err) {
        console.log(err);
    }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);