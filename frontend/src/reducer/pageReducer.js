import { createSlice } from '@reduxjs/toolkit';

const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
        page: 'home'
    },
    reducers: {
        setReducerPage(state, action) {
            return {
                ...state,
                page: action.payload
            }
        }
    }
});

export const setHomePage = () => {
    return dispatch => {
        dispatch(setReducerPage('home'));
    }
};


export const { setReducerPage } = pagesSlice.actions;
export default pagesSlice.reducer;
