import {makeHairStyle, moveUser, UserType, UserWithLaptopType} from './for-test';




test('reference type test', () => {
    let user: UserType = {
        name: 'Petr',
        hair: 40,
        address: {
            title: 'Minsk'
        }
    }
    const userAfterHairdresser = makeHairStyle(user, 2)
    //user = userAfterHairdresser

    expect(userAfterHairdresser.hair).toBe(20)
    expect(user.hair).toBe(40)
    expect(userAfterHairdresser.address).toBe(user.address) //т.к. деструктуризация массива делает только поверхностую копию, а поле address содержит в себе вложенный объект, то поля address у userAfterHairdresser и user будут ссылаться на один и тот же объект
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Petr',
        hair: 40,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title:'Asus'
        }
    }
    const userAfterMoving = moveUser(user, 'Kiev')

    //user = userAfterMoving
    expect(user).not.toBe(userAfterMoving)
    expect(user.address).not.toBe(userAfterMoving.address)
    expect(user.laptop).toBe(userAfterMoving.laptop)
    expect(userAfterMoving.address.title).toBe('Kiev')


})