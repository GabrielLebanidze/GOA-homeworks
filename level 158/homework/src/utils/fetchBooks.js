const fetchBooks = async (book) => {
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${book}&limit=10`);
        const data = await response.json();

        console.log(data);

        const result = [];

        for(const cur of data.docs) {
            console.log(cur.cover_i);
            const res = await fetch(`https://covers.openlibrary.org/b/id/${cur.cover_i}-L.jpg`);

            result.push({
                title: cur.title,
                year: cur.first_publish_year,
                author: cur.author_name[0],
                src: res.url
            })
        }

        console.log(result);
        return result;
    } catch (err) {
        console.log("Error", err);
    }
}

export { fetchBooks };