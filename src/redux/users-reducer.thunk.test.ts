import {Actions, follow, unfollow} from "./users-reducer";
import {usersAPI} from "../api/Users-api";
import {APIResponseType, ResultCodesEnum} from "../api/api";

jest.mock('../api/Users-api')
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}


usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))




test ("Success follow thunk", async () => {
    const thunk = follow(1)
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn();

   await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1,Actions.toggleFollowingProgress(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2,Actions.followSuccess(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3,Actions.toggleFollowingProgress(false, 1));

})

test ("Success unfollow thunk", async () => {
    const thunk = unfollow(1)
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn();

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1,Actions.toggleFollowingProgress(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2,Actions.unfollowSuccess(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3,Actions.toggleFollowingProgress(false, 1));

})