import { Link } from 'react-router-dom'
import './WorkExperience.css'

const WorkExperience = () => {
    const data = {
        experience : [
            {
                periode : "2022 - 2023",
                company_name : "PT. AGRES INFO TEKNOLOGI",
                jobs : [
                    "Development Backoffice ERP System."
                ],
                skills : [
                    "Laravel", "React JS"
                ]
            },
            {
                periode : "2020 - 2022",
                company_name : "PT. QNESYS TEKNOLOGI INDONESIA",
                jobs : [
                    "Development Hotel Hospitality System (Connected to Hardware like SmartLock).",
                    "Build Microservice API For HARO Apps."
                ],
                skills : [
                    "Laravel", "Codeigniter"
                ]
            },
            {
                periode : "2019 - 2020",
                company_name : "PT. 1011 DIGITAL AGENCY",
                jobs : [
                    "Development Platform Quiz (mikumi.com)."
                ],
                skills : [
                    "Codeigniter", "Express JS"
                ]
            },
            {
                periode : "2018 - 2019",
                company_name : "PT. JAGONYABISNIS",
                jobs : [
                    "Development E-Pelatihan BPSDM System.",
                    "Development Electronic Signature (Colaboration with Bsre)."
                ],
                skills : [
                    "Codeigniter", "GAMPIL"
                ]
            },
        ]
    }
    return (
        <>
            <div className="dms-portofolio-work-experience">
                <div className="dms-portofolio-work-experience-grid">
                    <div className="dms-portofolio-work-experience-content">
                        <div className="dms-portofolio-header-title-text">
                            <label><span>Work Experience&nbsp;</span></label>
                        </div>
                    </div>
                    <div className="dms-portofolio-work-experience-content">
                        <div className="dms-link-prev-page">
                            <Link to={'/about-me'}>
                                <p align="center" className='bounce'><img src='../../assets/images/icon-chevron-top.png' width="35px" alt='' /> <br/>About Me</p>
                            </Link>
                        </div>
                    </div>
                    <div className="dms-portofolio-work-experience-content">
                    </div>
                </div>
                <div>
                    <ul className='dms-portofolio-work-experience-list'>
                        {
                            data.experience.map((item)=>{
                                return (
                                    <li>
                                        <p className='company'><img class='img-check' src="./assets/images/icon-check.png" alt=''/>&emsp;{item.periode} ( {item.company_name} )</p>
                                        <ul className='jobs'>
                                            {
                                                item.jobs.map((itemJobs)=>{
                                                    return (
                                                        <li className='jobs-list'>-. {itemJobs}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <p className='skills'>
                                        &emsp;&emsp;Skills :&nbsp;
                                            {
                                                item.skills.map((itemSkills,i)=>{
                                                    let comma = ","
                                                    if(item.skills.length === (i+1))
                                                        comma = ""
                                                    return itemSkills + comma
                                                })
                                            }
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="dms-link-next-page">
                <Link to={'/my-project'}>
                    <p align="center" className='bounce'>My Project <br/> <img src='../../assets/images/icon-chevron-bottom.png' width="35px" alt='' /></p>
                </Link>
            </div>
        </>
    )
}
export default WorkExperience