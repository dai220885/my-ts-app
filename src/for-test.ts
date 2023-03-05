export type UserType = {
    name: string
    hair: number
    address: {title: string}
}

export type LaptopType ={
    title: string
}
export  type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle (u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power
    }
    return userCopy
}

export function moveUser (u: UserWithLaptopType, newAddressTitle: string) {
    const userCopy = {
        ...u,
        address: {...u.address, title: newAddressTitle}
    }
    return userCopy
}