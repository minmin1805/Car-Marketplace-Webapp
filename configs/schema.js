import { integer, json, varchar } from "drizzle-orm/pg-core";
import { pgTable, serial } from "drizzle-orm/pg-core";

export const CarListing=pgTable('carListing', {
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    tagline:varchar('tagline'),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice').notNull(),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    type:varchar('type').notNull(),  
    make:varchar('make').notNull(),
    model:varchar('model').notNull(),
    year:varchar('year').notNull(),
    driveType:varchar('driveType').notNull(),
    transmission:varchar('transmission').notNull(),
    fuelType:varchar('fuelType').notNull(),
    mileage:varchar('mileage').notNull(),
    engineSize:varchar('engineSize'),
    cylinder:varchar('cylinder'),
    color:varchar('color').notNull(),
    door:varchar('door').notNull(),
    vin:varchar('vin'),
    offerType:varchar('offerType'),
    listingDescription:varchar('listingDescription').notNull(),
    features:json('features'),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('userName').notNull().default('minmin'),
    userImageUrl:varchar('userImageUrl').default("https://i.pinimg.com/originals/3d/4d/de/3d4dde1d033c1930375b6372e2f42b8c.jpg"),
    postedOn:varchar('postedOn')
})

export const CarImages=pgTable('carImages',{
    id:serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    carListingId:integer('carListingId').notNull().references(() =>CarListing.id)
})