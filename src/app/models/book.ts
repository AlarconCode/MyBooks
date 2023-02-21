import {faker} from '@faker-js/faker';

export class Book {

    public id_book:number
    public title:string
    public author:string
    public description:string
    public price:string
    public photo:string

    constructor () {

        this.id_book = faker.datatype.number()
        this.title = faker.commerce.productName()
        this.author = faker.name.fullName()
        this.description = faker.commerce.productDescription()
        this.price = faker.commerce.price()
        this.photo = faker.image.image()


    }


}
