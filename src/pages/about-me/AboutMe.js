import { Link } from 'react-router-dom'
import './AboutMe.css'

const AboutMe = () => {
    const data = {
        photo_profile : "./assets/images/my-profile.jpg",
        email : "dimaskumara11@gmail.com",
        phone : "+62857-7650-5192",
        fullname : "Dimas Kumara",
        professional : "Backend Engineer",
        age : 26,
        address : "Bogor, West Java, Indonesia",
        skills : [
            {
                skill : "PHP",
                rate : 5
            },
            {
                skill : "Laravel",
                rate : 5
            },
            {
                skill : "Codeigniter",
                rate : 5
            },
            {
                skill : "Node JS",
                rate : 3
            },
            {
                skill : "React JS",
                rate : 3
            },
            {
                skill : "MYSQL",
                rate : 5
            },
            {
                skill : "MongoDB",
                rate : 3
            }
        ],
        instagram : "https://www.instagram.com",
        facebook : "https://www.facebook.com"
    }
    return (
        <>
            <div className="dms-portofolio-about-me">
                <div className="dms-portofolio-about-me-grid">
                    <div className="dms-portofolio-about-me-content">
                        <div className="dms-portofolio-header-title-text">
                            <label><span>About Me&nbsp;</span></label>
                        </div>
                    </div>
                    <div className="dms-portofolio-about-me-content">
                        <div className="dms-link-prev-page">
                            <Link to={'/'}>
                                <p align="center" className='bounce'><img src='../../assets/images/icon-chevron-top.png' width="35px" alt='' /> <br/>Main</p>
                            </Link>
                        </div>
                    </div>
                    <div className="dms-portofolio-about-me-content">
                    </div>
                </div>
                <div className="dms-portofolio-about-me-grid">
                    <div className="dms-portofolio-about-me-content">
                        <img className='img-photo-profile' src={data.photo_profile} alt=''/>
                        <ul style={{listStyleType:"none"}} className='dms-list'>
                            <li><img src="./assets/images/icon-mail.png" alt=''/> <span>{data.email}</span></li>
                            <li><img src="./assets/images/icon-phone.png" alt=''/> <span>{data.phone}</span></li>
                        </ul>
                    </div>
                    <div className="dms-portofolio-about-me-content">
                        <h1 align="center">Personal Data</h1>
                        <ul style={{listStyleType:"none"}} className='dms-list'>
                            <li><img src="./assets/images/icon-user.png" alt=''/> <span>{data.fullname}</span></li>
                            <li><img src="./assets/images/icon-laptop.png" alt=''/> <span>{data.professional}</span></li>
                            <li><img src="./assets/images/icon-age.png" alt=''/> <span>{data.age} Years Old</span></li>
                            <li><img src="./assets/images/icon-address.png" alt=''/> <span>{data.address}</span></li>
                        </ul>
                    </div>
                    <div className="dms-portofolio-about-me-content">
                        <h1 align="center">Skills</h1>
                        <ul style={{listStyleType:"none"}} className='dms-list'>
                            {
                                data.skills.map((item)=>{
                                    var stars = ""
                                    for (let index = 1; index <= 5; index++) {
                                        if(item.rate >= index){
                                            stars += `<img class='img-star' src="./assets/images/icon-star.png" alt=''/>`
                                        }
                                    }
                                    console.log(stars)
                                    return (
                                        <li>
                                            <table>
                                                <tr>
                                                    <td width="5%"><img class='img-check' src="./assets/images/icon-check.png" alt=''/></td>
                                                    <td width="40%"><span>{item.skill}</span></td>
                                                    <td width="55%"><span dangerouslySetInnerHTML={{__html: stars}}></span></td>
                                                </tr>
                                            </table>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dms-link-next-page">
                <Link to={'/work-experience'}>
                    <p align="center" className='bounce'>Work Exprience <br/> <img src='../../assets/images/icon-chevron-bottom.png' width="35px" alt='' /></p>
                </Link>
            </div>
        </>
    )
}
export default AboutMe