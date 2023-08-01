import './footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="logo">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31356.351839178038!2d106.6906938916206!3d10.76958525534777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1690528169368!5m2!1svi!2s" width="400" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="infomation">
                <p>Introduce address name</p>
                <input type="radio" name='location' id='location' value={1}/>1
                <input type="radio" name='location' id='location' value={2}/>2
                <input type="radio" name='location' id='location' value={3}/>3
                <input type="radio" name='location' id='location' value={4}/>4
                <input type="radio" name='location' id='location' value={5}/>5
            </div>
            <div className="contact">
               
            </div>
        </div>
     );
}
 
export default Footer;