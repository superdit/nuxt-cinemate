export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const { AccessToken } = config

    const upcomingMoviesUrl = 'http://api.themoviedb.org/3/movie/upcoming'

    const upcomingMovies = await $fetch(upcomingMoviesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            include_adult: false,
            include_video: false,
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc'
        }
    })

    return { upcomingMovies }
})