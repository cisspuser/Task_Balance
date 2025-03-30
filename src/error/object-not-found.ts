export default class ObjectNotFound extends Error {
    constructor(name: string, id: number) {
        super(`${name} with ID: ${id} not found !`);
    }
}
