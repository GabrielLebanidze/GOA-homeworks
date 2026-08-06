import MovieProvider from "./MovieProvider"
import ThemeProvider from "./ThemeProvider"

function AppProvider({ children }){
    return(
        <ThemeProvider>
            <MovieProvider>
                {children}
            </MovieProvider>
        </ThemeProvider>
    )
}

export default AppProvider