import './Aboutstyle.css'
import image3 from '../../images/image3.png'
import sicons1 from '../../images/sicons1.png'
import Footer from '../../components/footer';
import Gtt from '../../components/Gtt';
import Header from '../../components/header';

const About = () => {
    return (
        <div className="about-us-page">
            <Header/>
            <div className='first-frame'>
                <div className='text-bg'>
                    <div className='lft-txt'>
                        <span style={{fontSize: '15px', color:'#00D1F4', fontWeight:'800'}}>ABOUT US</span>
                        <h1>Empowering businesses with cutting-edge <span className='chgcol'>blockchain</span> solutions</h1>
                        <p>We strive to continuously improve and evolve our technology 
                            solutions to stay ahead of the curve.
                        </p>
                    </div>
                    <div className='rt-img'>
                        <img src={image3} className="first-frm-img" alt="img" />
                    </div>
                </div>
            </div>


            <div className='values-frame'>
                <div className='left-value'>
                    <span style={{fontSize: '70px', color:'rgb(0, 209, 244)', fontWeight:'800'}}>________</span>
                    <h1 style={{fontSize: '15px', color:'#00D1F4', fontWeight:'800', marginTop: '20px'}}>OUR VALUES</h1>
                    <h1>
                        The Core Values that Drive Everything
                    </h1>
                </div>
                
                <div className='rt-value'>
                    <div className='valuess'>
                        <div style={{fontSize: '30px', fontWeight: 'bolder', display:'flex', alignItems:'center'}}>
                            <img src={sicons1} className="sicons" alt="img" style={{marginRight: '30px'}} /><>Commitment to Quality</>
                        </div>
                        <p>Our staff is devoted to providing the highest quality, and we adhere 
                            to stringent professional development requirements by keeping our 
                            professional certificates and educational credentials current with 
                            market demands. Positioning ourselves as industry specialists.
                        </p>
                    </div>
                    <div className='valuess'>
                        <div style={{fontSize: '30px', fontWeight: 'bolder', display:'flex', alignItems:'center'}}>
                            <img src={sicons1} className="sicons" alt="img" style={{marginRight: '30px'}} />
                            <>Teamwork & Communication</>
                        </div>
                        <p>The provision of an environment in which our team may openly interact, 
                            exchange ideas, align expectations, and provide feedback is one of our 
                            core principles.
                        </p>
                    </div>
                    <div className='valuess'>
                        <div style={{fontSize: '30px', fontWeight: 'bolder', display:'flex', alignItems:'center'}}>
                            <img src={sicons1} className="sicons" alt="img" style={{marginRight: '30px'}} />
                            <>Inspiring Success</>
                        </div>
                        <p>All members of our team are committed to growing professionally, and we 
                            help them do so by providing them with the resources they need.
                        </p>
                    </div>
                </div>
            </div>


            <div className='fifth-frame'>
                <p className='chgcol'> GET IN TOUCH</p>
                <h1>Accelerate your <span className='chgcol'>workflow</span> with us.</h1>
                <p style={{fontSize: '25px'}}>Have a question or want more info? we will be happy to help.</p><br/>
                <button>Contact Us</button>
            </div>


            <Footer/>
            <Gtt />
        </div>
    );
}
 
export default About;