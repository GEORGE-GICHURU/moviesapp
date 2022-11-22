const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: '4ac4d658ddc05d4343c60d3538280bbd',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;