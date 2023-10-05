import './Contactstyles.css'
import Gtt from '../../components/Gtt'
import Footer from '../../components/footer';
import sicons1 from '../../images/sicons1.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className='first-frame'>
                <div className='text-bg'>
                    <div className='lft-txt'>
                        <h1>Get in touch with us! </h1>
                        <p>We would love to hear from you! If you have any questions or comments
                            about our products and services, please do not hesitate to get in touch.
                        </p>
                    </div>
                    <div className='rt-img'>
                        <div className='form-bg'>
                            <h1> We'd love to hear from you :)</h1>
                            <form>
                                <label for='fullname'>Full Name</label><br/>
                                <input type='text' id='fullname' placeholder='John Doe'/>

                                <label for='Email'>Email Address</label><br/>
                                <input type='email' id='Email' placeholder='johndoe@lithiumdigital.com'/>

                                <label for='resi'>Describe what you are looking for</label><br/>
                                <input type='text' id='resi'/>

                                <button>Send Message</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='reach-frame'>
                <div className='left-value'>
                    <span style={{fontSize: '70px', color:'rgb(0, 209, 244)', fontWeight:'800'}}>________</span>
                    <h1 style={{fontSize: '15px', color:'#00D1F4', fontWeight:'800', marginTop: '20px'}}>IF YOU PREFER</h1>
                    <h1>
                        You can also reach out to us by:
                    </h1>
                </div>
                
                <div className='rt-value'>
                    <div className='reachs'>
                        <div style={{fontSize: '30px', fontWeight: 'bolder', display:'flex', alignItems:'center'}}>
                            <img src={sicons1} className="sicons" alt="img" style={{marginRight: '30px'}} />
                            <>Sending us an Email</>
                        </div>
                        <p>Simply drop us an email at <a href='mailto:info@lithiumdigital.com'>info@lithiumdigital.com</a> and you
                             will receive a reply within 24 hours.
                        </p>
                    </div>
                    <div className='reachs'>
                        <div style={{fontSize: '30px', fontWeight: 'bolder', display:'flex', alignItems:'center'}}>
                            <img src={sicons1} className="sicons" alt="img" style={{marginRight: '30px'}} />
                            <>Giving us a call</>
                        </div>
                        <p>Give us a ring on <a href='tel:+441614572071'>+441614572071</a>. Our Experts are on stand by Monday to 
                            Friday from 9am to 5pm EST.
                        </p>
                    </div>
                    <div className='reachs'>
                        <div style={{fontSize: '30px', fontWeight: 'bolder', display:'flex', alignItems:'center'}}>
                            <img src={sicons1} className="sicons" alt="img" style={{marginRight: '30px'}} />
                            <>Come pay us a visit</>
                        </div>
                        <p>Come pay us a visit at<br/>
                            403,<br/>
                            Imperial Court,<br/>
                            Manchester, United Kingdom.<br/>
                        </p>
                    </div>
                </div>
            </div>


            <Footer />
            <Gtt />
        </div>
    );
}
 
export default Contact;