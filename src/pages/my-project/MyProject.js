import { Link } from 'react-router-dom'
import './MyProject.css'

const MyProject = () => {
    const data = {
        my_project : [
            {
                thumbnail : "https://niagaspace.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2021/01/05191655/website-vs-web-application.jpg",
                created_at : "25/04/2023 22:00",
                project_name : "PPDB AL ISLAM",
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
                thumbnail : "https://niagaspace.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2021/01/05191655/website-vs-web-application.jpg",
                created_at : "25/04/2023 22:00",
                project_name : "SIPELEM",
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
                thumbnail : "https://niagaspace.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2021/01/05191655/website-vs-web-application.jpg",
                created_at : "25/04/2023 22:00",
                project_name : "MILIKUMI",
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
        ]
    }
    return (
        <>
            <div className="dms-portofolio-my-project">
                <div className="dms-portofolio-my-project-grid">
                    <div className="dms-portofolio-my-project-content">
                        <div className="dms-portofolio-header-title-text">
                            <label><span>My Project&nbsp;</span></label>
                        </div>
                    </div>
                    <div className="dms-portofolio-my-project-content">
                        <div className="dms-link-prev-page">
                            <Link to={'/work-experience'}>
                                <p align="center" className='bounce'><img src='../../assets/images/icon-chevron-top.png' width="35px" alt='' /> <br/>Work Experience</p>
                            </Link>
                        </div>
                    </div>
                    <div className="dms-portofolio-my-project-content">
                    </div>
                </div>
                <div className="dms-portofolio-my-project-grid">
                {
                    data.my_project.map((item,index)=>{
                        return (
                            <div className="dms-portofolio-my-project-content">
                                <div className='card'>
                                    <img className='thumbnail' src={item.thumbnail} width="100%" alt=''/>
                                    <p className='created_at'>{item.created_at}</p>
                                    <header className='project_name'>{index+1}. {item.project_name}</header>
                                    <p className='description'>{item.description}</p>
                                    <p className='link'>
                                        <Link to={'/work-experience'}>
                                            See More >>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <p className='dms-portofolio-my-project-more'>
                    <Link to={'/work-experience'}>
                        See More >>
                    </Link>
                </p>
            </div>
        </>
    )
}
export default MyProject