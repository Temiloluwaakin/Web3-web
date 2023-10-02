import Header from '../components/header';
import "./Pagestyles.css"
import image3 from '../images/image3.png'
import slide1 from '../images/slide1.png'
import slide2 from '../images/slide2.png'
import slide3 from '../images/slide3.png'
import sicons1 from '../images/sicons1.png'
import sicons2 from '../images/sicons2.png'
import sicons3 from '../images/sicons3.png'
import map from '../images/map.png'
import Footer from '../components/footer';



const Homepage = () => {
    return (
        <div className="homepage">
            <Header/>

            <div className='first-frame'>
                <div className='text-bg'>
                    <div className='lft-txt'>
                        <span style={{fontSize: '70px', color:'#00D1F4', fontWeight:'800'}}>_______</span>
                        <h1>Unleash the power of <span className='chgcol'>blockchain</span> technology</h1>
                        <p>We are committed to providing first-grade
                            blockchain experience. Whatever your need 
                            may be, we’ve got you covered.
                        </p>
                    </div>
                    <div className='rt-img'>
                        <img src={image3} className="first-frm-img" alt="img" />
                    </div>
                </div>

            </div>


            <div className='second-frame'>
                <div className='top-txt'>
                    <h1>Lithium Digital <span className='chgcol'>Products</span></h1>
                    <p>Providing cutting-edge blockchain solutions designed to excel at the highest level</p>
                </div>
                <div className='sf-slides'>
                    <div className='sf-slides-txt'>
                        <h1>Lithium Web3 APIs</h1>
                        <p>We provide fast and secure Web3 APIs, catering to a range of users with 
                            varying needs and preferences.
                        </p>
                        <button>Learn more →</button>
                    </div>
                    <img src={slide1} className='slide-images' alt='img'/> 
                </div>
                <div className='sf-slides'>
                    <img src={slide2} className='slide-images' alt='img'/> 
                    <div className='sf-slides-txt'>
                        <h1>Lithium Staking</h1>
                        <p>Earn up tp 5% in annual rewards by stacking your treasury with Lithium.
                            Experience the ease of stacking in just a few simple clicks.
                        </p>
                        <button>Learn more →</button>
                    </div>
                </div>
                <div className='sf-slides'>
                    <div className='sf-slides-txt'>
                        <h1>Lithium Faucets</h1>
                        <p>Get access to networks supported on our <span className='chgcol'>chain-list!</span> With 24/7 uptime and
                            free access to node, your build time is shortened.
                        </p>
                        <button>Coming soon</button>
                    </div>
                    <img src={slide3} className='slide-images' alt='img'/> 
                </div>
            </div>


            <div className='third-frame'>
                <div className='top-txt'>
                    <span style={{fontSize: '70px', color:'#00D1F4', fontWeight:'800'}}>________</span>
                    <h1 style={{fontSize: '40px', fontWeight:'800'}}>Our Services</h1>
                    <p style={{width: '55%', margin: '0px auto'}}>
                        We help businesses of all sizes leverage the power of Blockchain to improve
                        efficiency, drive innovation, and achieve their goals.
                    </p>
                </div>
                <div className='tf-slides'>
                    <div className='boxx'>
                        <img src={sicons1} className='services-image' alt='img'/>
                        <h1>Blockchain Infrastructure</h1>
                        <p>Tailored blockchain solutions: Consulting, Smart contract, and
                            DApp development expertise at your service.</p>
                        <button>Learn More →</button>
                    </div>
                    <div className='boxx'>
                        <img src={sicons2} className='services-image' alt='img'/>
                        <h1>Lithium Capital</h1>
                        <p>Expert guidance and node services for seamless integration and 
                            enhanced performance.</p>
                        <button>Learn More →</button>
                    </div>
                    <div className='boxx'>
                        <img src={sicons3} className='services-image' alt='img'/>
                        <h1>Software Solutions</h1>
                        <p>We invest in blockchain projects and educate individuals and businesses about
                            its transformative power.</p>
                        <button>Learn More →</button>
                    </div>
                </div>


                <div className='fourth-frame'>
                    <div className='lt2'>
                        <h2> Empowering users globally with innovative blockchain solutions for
                        </h2>
                        <h2 style={{marginTop: '0px'}}><span className='chgcol'> limitless possibilities!</span></h2>
                        <span id='spac'>
                            <span>
                                <h1>40k<span className='chgcol'>+</span></h1>
                                <p className='chgcol'>Requests</p>
                            </span>
                            <span>
                                <h1>99.9<span className='chgcol'>%</span></h1>
                                <p className='chgcol'>Availability</p>
                            </span>
                            <span>
                                <h1>20<span className='chgcol'>+</span></h1>
                                <p className='chgcol'>Countries</p>
                            </span> 
                        </span>
                    </div>
                    <img src={map} className='mapimg' alt='img' />
                </div>


                <div className='fifth-frame'>
                    <p className='chgcol'> GET IN TOUCH</p>
                    <h1>Accelerate your <span className='chgcol'>workflow</span> with us.</h1>
                    <p style={{fontSize: '25px'}}>Have a questio or want more info? we will be happy to help.</p><br/>
                    <button>Contact Us</button>
                </div>

                <Footer/>
            </div>
        </div>
    );
}
 
export default Homepage;