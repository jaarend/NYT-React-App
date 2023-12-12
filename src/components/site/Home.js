import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome to React Fundamentals</h1>
                <p>
                    this is app is intended to a be starter/tutorial app.
                </p>
                <hr></hr>
                <h1>Important Notes</h1>
                <ul>
                    <li>
                        <Link to="/resources">React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;