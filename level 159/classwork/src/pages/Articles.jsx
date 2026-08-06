import { Fragment } from "react/jsx-runtime"
import { ARTICLES } from "../utils/data"    
import { NavLink } from "react-router-dom"
import Nav from "../Components/Nav"
function Articles(){
    return(
        <>
        <Nav />
        <h1>Articles</h1>
        {ARTICLES.map((cur, ind) => {
            return(
                <Fragment key={ind}>
                    <NavLink to={`/articles/${cur.slug}`}>{cur.title}</NavLink>
                    <br /><br />
                </Fragment>
            )
        })}
        </>
    )
}

export default Articles