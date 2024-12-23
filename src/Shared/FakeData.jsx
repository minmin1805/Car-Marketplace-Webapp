import { faker } from '@faker-js/faker';

function createRandomCarList() {
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://media.gettyimages.com/id/1363692446/photo/bmw-7-series-on-a-street.jpg?s=612x612&w=gi&k=20&c=9N5_i16VgMHPYegWA3IgGid27nZqux-9Vp9Por3lde0=',
        miles:1000,
        gearType:'Automatic',
        price:faker.finance.amount({min:4000, max:20000})
    };
}

const carList=faker.helpers.multiple(createRandomCarList, {
    count:7
}) 

export default {
    carList
} 