


export const getGifs = async (categoryq) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=BhVkS6kEOuXj1bTHSI9KN1FzBFyWC1df&q=${categoryq}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // TODO
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}