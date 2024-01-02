export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json()
    return anime
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource);
    return response.data.flatMap(item => item[objectProperty])
};

export const reproduce = (dataInput, gap) => {
    const first = ~~(Math.random() * (dataInput.length - gap) + 1)
    const last = first + gap

    const response = {
        data: dataInput.slice(first, last)
    }
    return response;
}