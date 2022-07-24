import me from '../../images/me.jpg'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

function Card() {
    return(
        <div className="card">
            <img src={me} alt="a picture of myself" id='picture'/>
            <div className='cardBody'>
                <div className="titleSection">
                    <h1>Gabriel Castro</h1>
                    <h2>Web Developer</h2>
                    <p>gabrielcastro.website</p>
                </div>
                <button className='emailButton'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Email</span>
                </button>
                <div className="textSection">
                    <h3>About</h3>
                    <p>I am a web developer searching for oportunities to solve real problems using the tools programming provides me. I believe in making life easy with technology.</p>
                    <h3>Interests</h3>
                    <p>Musiciand and book lover always trying to understand better the world around me.</p>
                </div>
            </div>
            <div className="icons">
                <FaInstagramSquare />
                <FaFacebookSquare />
                <FaGithubSquare />
                <FaLinkedin />
            </div>
        </div>
    );
}

export default Card;