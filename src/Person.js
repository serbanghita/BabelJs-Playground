class Person {
    /**
     * Person class
     *
     * @param id
     * @param name
     * @param age
     */
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    /**
     * Return the id of the Person.
     * @returns {number}
     */
    getId() {
        return this.id;
    }

    /**
     * Generate a JSON object.
     * @returns {{id: {number}, name: {string}, age: {string}}}
     */
    toObj() {
        return {
            id: this.id,
            name: this.name,
            age: this.age
        }
    }
}