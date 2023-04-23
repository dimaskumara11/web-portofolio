import './Home.css'
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    const data = {
        fullname : "DIMAS KUMARA",
        position : "WEB DEVELOPER",
        description : "I’m a Web Developer from Indonesia. I create custom websites to help business do better online."
    }
    return (
        <>
            <Navbar/>
            <div className="dms-portofolio-home">
                <div className="dms-portofolio-home-left">
                    <h1 className='dms-portofolio-home-left-fullname'>Hi, I'm {data.fullname}</h1>
                    <p className='dms-portofolio-home-left-description'>{data.description} </p>
                    <button><img src='../../assets/images/logo-whatsapp.png' width="32px" alt=''/> Chat Me</button>
                </div>
                <div className="dms-portofolio-home-right">
                    <img src='../../assets/images/image-programmer.png' alt='' />
                </div>
            </div>
            <div className="dms-link-next-page">
                <Link to={'about-me'}>
                    <p align="center" className='bounce'>About Me <br/> <img src='../../assets/images/icon-chevron-bottom.png' width="35px" alt='' /></p>
                </Link>
            </div>
        </>
    )
}
export default Home