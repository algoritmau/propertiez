import { Collection, ObjectId } from 'mongodb'

interface Listing {
    _id: ObjectId
    title: string
    image: string
    address: string
    price: number
    numOfGuests: number
    numOfBeds: number
    numOfBaths: number
    rating: number
}

export interface Database {
    listings: Collection<Listing>
}