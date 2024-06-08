const cars = [
    {
        name: "Modelo 1",
        image: "car1.jpg",
        km: 400,
        price: 15000
    },
    {
        name: "Modelo 2",
        image: "car2.jpg",
        km: 1200,
        price: 18000
    },
    {
        name: "Modelo 3",
        image: "car3.jpg",
        km: 800,
        price: 17000
    },
    {
        name: "Modelo 4",
        image: "car4.jpg",
        km: 2000,
        price: 16000
    }
];

let contador = 0;
const selectedCars = [];
const dataCarsElement = document.querySelector("[data-cars]");


function renderCar(){
    let carElement = '';
    cars.forEach(car => {
        carElement += `
            <div class="card text-white p-0 m-2" style="width: 15rem; background-color: #112D46;" onclick="changeBackground(${contador})" ondblclick="resetSelectedCars(${contador})">
                <div class="card-body">
                    <h5 class="card-title">${car.name}</h5>
                </div>
                <img id="img${contador}" src="images/${car.image}" class="card-img-top" alt="img${contador}" style="border-radius: 0px">
                <div class="card-body">
                    <p class="card-text">${car.km} km</p>
                    <h2 class="card-text">${car.price}€</h2>
                </div>
            </div>
        `;
        contador++;
    });
    dataCarsElement.innerHTML = carElement;
}


function changeBackground(carIndex){
    const cardElement = document.querySelector(`#img${carIndex}`).parentElement;
    cardElement.style.backgroundColor = ''; 
    cardElement.style.backgroundColor = '#155584';
    selectedCars.push(`#img${carIndex}`)

}

function resetSelectedCars(carIndex){
    const cardElement = document.querySelector(`#img${carIndex}`).parentElement;
    cardElement.style.backgroundColor = ''; 
    cardElement.style.backgroundColor = '#112D46';

}

document.addEventListener("DOMContentLoaded", renderCar);


