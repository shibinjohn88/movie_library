const movies = express.Router ()
const API_KEY = '2186c8fcda107afc8d4e5f502d9ebd25'


export const getMovieReviews = (res, req) => {
    //call the api
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    
    //prepare what information to send to FE
    //return that information

    db.getMovieReviews.findById(req.params.id)
    .then(reviews => {
        db.getMovieReviews.create(req.body)
    })
    .catch(err => {
        res.render('error404')
    })
    console.log(res, req)
}