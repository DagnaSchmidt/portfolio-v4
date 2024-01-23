import { createSlice } from '@reduxjs/toolkit';

const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
        page: 'home',
        project: null
    },
    reducers: {
        setReducerPage(state, action) {
            return {
                ...state,
                page: action.payload
            }
        },
        setReducerProject(state, action) {
            return {
                ...state,
                project: action.payload
            }
        },
        clearReducerProject(state, action) {
            return {
                ...state,
                project: null
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

export const setProject = (data) => {
    return dispatch => {
        dispatch(setReducerProject(data));
    }
};

export const clearProject = () => {
    return dispatch => {
        dispatch(clearReducerProject());
    }
};


export const { setReducerPage, setReducerProject, clearReducerProject } = pagesSlice.actions;
export default pagesSlice.reducer;
