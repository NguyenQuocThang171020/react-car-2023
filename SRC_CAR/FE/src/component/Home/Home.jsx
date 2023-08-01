import './home.css'
import { useState, Fragment } from "react";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { SiBmw, SiHonda, SiFord, SiMercedes, SiVolkswagen, SiToyota, SiHyundai, SiGeneralmotors, SiTesla, SiRenault, SiNissan, SiKia } from 'react-icons/si'
import { Link } from 'react-router-dom';


const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <div className="header">
                <div className='taskbar flex'>
                    <div className='logo'>Trymto</div>
                    <ul className='menu flex'>
                        <li className='nav'><Link to="/" className='text-nav'>Home</Link></li>
                        <li className='nav'><Link to="/list" className='text-nav'>List</Link></li>
                        <li className='nav'><Link to="/news" className='text-nav'>News</Link></li>
                        <li className='nav'>
                            <span className='btn-select'><Link to="/login" className='text-nav'>Login</Link></span>
                        </li>
                    </ul>
                </div>
                <div className='content-header flex'>
                    <div className='introduce'>
                        <p>Introduces List</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusantium distinctio, doloremque facilis ratione reprehenderit natus dicta voluptates veniam labore pariatur .</p>
                        <hr style={{ marginBottom: '30px' }} />
                        <span>
                        <span className='btn-select' style={{ marginRight: '20px',cursor:'pointer'}} variant="outlined" onClick={()=>setOpen(true)}>
                            <BsFillPlayCircleFill style={{ marginRight: '10px' }}/>Watch
                        </span>
                        <div className='open-modal' style={open === true ? {display:""} : {display:"none"}}>
                            <div className='close' onClick={()=>setOpen(false)}>x</div>
                            <div style={{overflow:'hidden'}}>
                                <iframe width="100%" height="620px" src="https://www.youtube.com/embed/yh0ZGHiizSA" title="car" frameBorder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                        </span>
                        <span className='btn-select' variant="outlined"><Link to="/list" className='text-nav'>Buy Now</Link></span>
                    </div>
                    <div className='explain-introduce'></div>
                </div>
                <div className='footer-header flex'>
                    <div className='map-address flex'>
                        <span className='icon-company'><SiBmw /></span>
                        <span className='icon-company'><SiHonda /></span>
                        <span className='icon-company'><SiFord /></span>
                        <span className='icon-company'><SiMercedes /></span>
                        <span className='icon-company'><SiVolkswagen /></span>
                        <span className='icon-company'><SiToyota /></span>
                        <span className='icon-company'><SiHyundai /></span>
                        <span className='icon-company'><SiGeneralmotors /></span>
                        <span className='icon-company'><SiTesla /></span>
                        <span className='icon-company'><SiRenault /></span>
                        <span className='icon-company'><SiNissan /></span>
                        <span className='icon-company'><SiKia /></span>
                    </div>
                    <div className="wrapper"></div>
                </div>
            </div>
        </Fragment>

    );
}

export default Home;