'use strict';

// // navigator.geolocation.getCurrentPosition(position => {
// //     console.log(position);
// // }, err => console.log(err));

// const getPosition =  function() {
//     return new Promise(function(resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }

// // getPosition().then(function(data) {
// //     console.log(data);
// // });

// // getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//     getPosition().then(pos => {
//         const { latitude: lat, longitude: lng } = pos.coords;

//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     }).then(res => {
//             if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}`);
    
//             return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//         })
//         .then(res => {
//             if (!res.ok) throw new Error(`Country not found (${res.status})`);
    
//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(`${err.message} 💥`));
// };

// whereAmI();

const wait = function (seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('erorr', function() {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;

createImage('img/img-1.jpg').then(function(img) {
    currentImg = img;
    console.log('Image 1 has loaded');
    return wait(2)
}).then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
}).then(() => {
    currentImg = img;
    console.log('Image 2 has loaded');
    return wait(2);
}).then(() => {
    currentImg.style.display = 'none';
}).catch(err => console.log(err));