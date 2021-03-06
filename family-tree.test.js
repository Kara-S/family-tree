const familyTree = require('./family-tree')

describe('Family Tree', function () {
    test('I am in my family tree', function () {
        const me = familyTree[0]
        expect(me.name).toEqual('Kara')
    })

    test('My sister is also there', function () {
        const sister = familyTree[1]
        expect(sister.name).toEqual('Lydia')
    })

    test('My mum is in the tree', function () {
        const me = familyTree[0]
        const mum = me.parents[0]
        expect(mum.name).toEqual('Nicola')
    })
})