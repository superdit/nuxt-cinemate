export default defineEventHandler(async event => {
    const userQuery = getQuery(event)
    const {searchTerm} = userQuery
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
    const moviesSearchUrl = 'http://api.themoviedb.org/3/search/movie'
    const seriesSearchUrl = 'http://api.themoviedb.org/3/search/tv'

    const movies = await $fetch(moviesSearchUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            query: searchTerm
        }
    })

    const series = await $fetch(seriesSearchUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            query: searchTerm
        }
    })

    return {movies, series}
})