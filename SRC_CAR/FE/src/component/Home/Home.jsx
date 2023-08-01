import './home.css'
import { useState, Fragment } from "react";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { SiBmw, SiHonda, SiFord, SiAudi ,SiMercedes, SiTesla, SiToyota, SiHyundai, SiSuzuki, SiVolkswagen, SiRollsroyce, SiNissan, SiKia ,SiPorsche} from 'react-icons/si'
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
                        <li className='nav'><Link to="/service" className='text-nav'>Service</Link></li>
                        <li className='nav'><Link to="/discover" className='text-nav'>Discover</Link></li>
                        <li className='nav'><Link to="/contact" className='text-nav'>Contact</Link></li>
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
                        <span className='btn-select' variant="outlined"><Link to="/model" className='text-nav'>Buy Now</Link></span>
                    </div>
                    <div className='explain-introduce'></div>
                </div>
                <div className='footer-header flex'>
                    <div className='map-address flex'>
                        <span className='icon-company'><SiBmw /></span>
                        <span className='icon-company'><SiHonda /></span>
                        <span className='icon-company'><SiFord /></span>
                        <span className='icon-company'><SiAudi /></span>
                        <span className='icon-company'><SiMercedes /></span>
                        <span className='icon-company'><SiTesla /></span>
                        <span className='icon-company'><SiToyota /></span>
                        <span className='icon-company'><SiHyundai /></span>
                        <span className='icon-company'><SiSuzuki /></span>
                        <span className='icon-company'><SiVolkswagen /></span>
                        <span className='icon-company'><SiRollsroyce /></span>
                        <span className='icon-company'><SiNissan /></span>
                        <span className='icon-company'><SiKia /></span>
                        <span className='icon-company'><SiPorsche /></span>
                    </div>
                    <div className="wrapper"></div>
                </div>
            </div>
        </Fragment>

    );
}

export default Home;