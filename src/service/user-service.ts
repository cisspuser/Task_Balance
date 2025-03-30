import { Op } from 'sequelize';
import { User } from '../db/models/user';
import NotEnoughBalance from '../error/not-enough-balance';
import ObjectNotFound from '../error/object-not-found';

async function updateBalance(userId: number, amount: number) {
    const user = await User.findOne({
        where: { id: userId },
    });

    if (!user) {
        throw new ObjectNotFound('User', userId);
    }

    const result =
        amount >= 0
            ? await User.increment(
                  { balance: amount },
                  {
                      where: {
                          id: userId,
                      },
                  },
              )
            : await User.increment(
                  { balance: amount },
                  {
                      where: {
                          [Op.and]: [{ id: userId }, { balance: { [Op.gte]: Math.abs(amount) } }],
                      },
                  },
              );

    const flatResult = result.flat(2);
    const updatedUserCount = flatResult[1];
    const updatedUser = flatResult[0];

    if (!updatedUserCount) {
        throw new NotEnoughBalance(userId);
    }

    return updatedUser;
}

export const UserService = {
    updateBalance: updateBalance,
};
