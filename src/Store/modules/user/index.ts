import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    token: string;
    id?:string;
    name?: string;
    pic?: string;
}

const userReduce = createSlice({
    name: "user",
    initialState: {
        token: "",
        id: "",
        name: "",
        pic: ""
    } as UserState,
    reducers : {
        setUser(state, action){
            Object.assign(state, {
               token: action.payload.token, 
               id: action.payload.id,
               name: action.payload.name,
               pic: action.payload.pic,
            });
        }
    }
})

export const {setUser} = userReduce.actions;

export default userReduce.reducer;