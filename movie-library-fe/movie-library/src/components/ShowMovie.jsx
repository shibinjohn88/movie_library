const React = require('react')
const App = require('../App')

function ShowMovie(data) {
    // add show stuff here
    return (
        <App>
            {/* movie poster w/ title, review, and rating */}

            {/* LINK BUTTON TO PROPER PAGE */}
            <a href='/EditMovie'> 
                <button classname='edit-button' type='button'>Edit</button>
            </a>

            <a href='/ReviewMovie'>
                <button classname='edit-button' type='button'>Review</button>
            </a>
        </App>
    )
}

export default ShowMovie