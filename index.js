const cars = [
{
    id: 1,
    name: "Supra",
    maker: "Hot Wheel",
    price: 1.52,
    weight: 1.1,
    length: 1.4
},
{
    id: 2,
    name: "Raptor",
    maker: "Hot Wheel",
    price: 1.50,
    weight: 2.5,
    length: 1.3
},
{
    id: 3,
    name: "Viper",
    maker: "Hot Wheel",
    price: 1.53,
    weight: 1.8,
    length: 1.7
},
{
    id:4,
    name: "Corvette",
    maker: "Hot Wheel",
    price: 1.58,
    weight: 1.9,
    length: 2.6
},
{
    id:5,
    name: "NSX",
    maker: "Hot Wheel",
    price: 1.55,
    weight: 2.6,
    length: 2.8
}
]

const carToFind = 2

for (const car of cars) {
    if (car.id === carToFind) {
    car.price = car.price + 0.05
    console.log(`The ${car.maker} ${car.name} weighs ${car.weight} pounds. It now cost ${car.price} dollars.`)
}
}
