import usersReducer, {Actions, InititalState} from "./users-reducer";
import {UserType} from "../types/types";

let state: InititalState;


beforeEach(() => {
  state  = {
        users: [
            {
                id: 0, name: 'Anton 0', followed: false,
                photos: { small: null, large: null}, status: 'Status 0'
            },
            {
                id: 1, name: 'Anton 1', followed: false,
                photos: { small: null, large: null}, status: 'Status 1'

            },
            {
                id: 2, name: 'Anton 2', followed: true,
                photos: { small: null, large: null}, status: 'Status 2'

            },
            {
                id: 3, name: 'Anton 3', followed: true,
                photos: { small: null, large: null}, status: 'Status 3'

            }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    };

})

test("Follow Success", () => {


    const newState = usersReducer(state, Actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()

})

test("Unfollow success", () => {


    const newState = usersReducer(state, Actions.unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()

})