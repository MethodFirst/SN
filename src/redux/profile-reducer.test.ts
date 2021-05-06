 import profileReducer, {actions} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from 'react';
 import {ProfileType} from "../types/types";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: "",
    newPostText: ""
};

it('length of posts should be incremented', () => {
    //1. Test data
    let action = actions.addPostActionCreator("MethodFirst.com");

    //2. action
    let newState = profileReducer(state,action);
    //3. expectations
    expect(newState.posts.length).toBe(5);
});


it('message of post should be correct', () => {
    //1. Test data
    let action = actions.addPostActionCreator("MethodFirst.com");

    //2. actions
    let newState = profileReducer(state,action);
    //3. expectations
    expect(newState.posts[4].message).toBe("MethodFirst.com");
});

it('after deleting length should be decremented', () => {
    //1. Test data
    let action = actions.deletePost(1);
    //2. actions
    let newState = profileReducer(state,action);
    //3. expectations
    expect(newState.posts.length).toBe(3);
});

it('after deleting length should not be decremented', () => {
    //1. Test data
    let action = actions.deletePost(10000000);
    //2. actions
    let newState = profileReducer(state,action);
    //3. expectations
    expect(newState.posts.length).toBe(4);
});

