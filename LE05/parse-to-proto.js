module.exports = { parseToProto}

function parseToProto(jsonString, proto) {
    const obj = JSON.parse(jsonString);
    return Object.assign(Object.create(proto), obj);
}


describe("when song has been paused", function() {
    let obj; 
    let proto = { category: "animal" }
    beforeEach(function() {
        obj = parseToProto('{"type":"cat","name":"Mimi","age":3}', proto)
    })
    it("age should be 3", function() {
        expect(obj.age).toEqual(3)
    /* demonstrates use of 'not' with a custom matcher */
    })
    it("obj category should be animal", function() {
        expect(obj.category).toEqual("animal")
    })
})