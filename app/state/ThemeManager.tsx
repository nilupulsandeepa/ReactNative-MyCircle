import { useEffect } from "react";
import { Appearance } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { setSystemTheme } from "./slices/ThemeSlice";

const ThemeManager = ({ children }) => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    useEffect(() => {
        const currentSystemTheme = Appearance.getColorScheme();
        dispatch(setSystemTheme(currentSystemTheme));

        //Add a listener for system theme changes
        const listener = Appearance.addChangeListener(({ colorScheme }) => {
            dispatch(setSystemTheme(colorScheme));
        });

        return () => listener.remove();
    }, [dispatch])

    return children;
}

export default ThemeManager;