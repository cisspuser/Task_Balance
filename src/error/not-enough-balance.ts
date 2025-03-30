export default class NotEnoughBalance extends Error {
    constructor(userId: number) {
        super(`User with ID: ${userId} has not enough balance !`);
    }
}
