import { createSlice } from '@reduxjs/toolkit';

const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
        page: 'home',
        project: ''
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

export const setWorkPage = () => {
    return dispatch => {
        dispatch(setReducerPage('work'));
    }
};

export const setAboutPage = () => {
    return dispatch => {
        dispatch(setReducerPage('about'));
    }
};


export const { setReducerPage } = pagesSlice.actions;
export default pagesSlice.reducer;
