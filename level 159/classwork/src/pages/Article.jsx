import { useParams } from "react-router-dom"
import { ARTICLES } from "../utils/data"
import Nav from "../Components/Nav"

function Article(){
    const { article } = useParams()
    const cur = ARTICLES.find((a) => a.slug === article)
    console.log(cur)
    return(
        <>
            <Nav />
            <h1>author: {cur.author}</h1>
            <h2>{cur.title}</h2>
            <p>{cur.body}</p>
        </>
    )
}

export default Article