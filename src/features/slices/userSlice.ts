import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../../utils/types";

const userSlice = createSlice({
    name: 'user',
    initialState: {} as UserProfile,
    reducers: {
        putUser: (state, action) => action.payload,
        deleteUser: state => ({} as UserProfile),
        updateFirstName: (state, action) => {
            state.firstName = action.payload
        },
        updateLastName: (state, action) => {
            state.lastName = action.payload
        },
        addRole: (state, action) => {
            state.roles.push(action.payload);
        },
        removeRole: (state, action) => {
            state.roles = state.roles.filter(r => r !== action.payload)
        }
    }
})

export const { putUser, deleteUser, updateFirstName, updateLastName, addRole, removeRole } = userSlice.actions
export default userSlice.reducer