export default class ValidationError extends Error {
    constructor(public items: unknown[]) {
        super('ValidationError');
    }
}
