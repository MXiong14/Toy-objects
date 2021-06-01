const cars = [
{
    id: 1,
    name: "Supra",
    maker: "HotWheel",
    price: 1.50,
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
    price: 1.50,
    weight: 1.8,
    length: 1.7
}
]

const corvette = {
    id:4,
    name: "Corvette",
    maker: "Hot Wheel",
    price: 1.50,
    weight: 1.9,
    length: 2.6
}

const nsx = {
    id:5,
    name: "NSX",
    maker: "Hot Wheel",
    price: 1.50,
    weight: 2.6,
    length: 2.8
}

cars.push(corvette, nsx)

for (const car of cars) {
    console.log(car.name)
}

