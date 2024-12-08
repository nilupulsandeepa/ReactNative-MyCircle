import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: 'system', //Default to system theme
        systemTheme: 'light'
    },
    reducers: {
        setLightTheme: (state) => {
            state.theme = 'light';
        },
        setDarkTheme: (state) => {
            state.theme = 'dark';
        },
        setSystemTheme: (state, action) => {
            state.systemTheme = action.payload; //Update system theme
        },
        setThemeToFollowSystem: (state) => {
            state.theme = 'system';
        },
    }
});

//Export actions
export const { setLightTheme, setDarkTheme, setSystemTheme, setThemeToFollowSystem } = ThemeSlice.actions;

//Export reducer
export default ThemeSlice.reducer;