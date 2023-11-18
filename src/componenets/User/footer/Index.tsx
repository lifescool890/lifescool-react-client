import { Row,Col} from 'antd'
import "./style.scss"
import "../../font.scss"
import whiteLogo from "../../../assets/images/white-logo-rectangle.png"
import whiteInsta from "../../../assets/images/instagram.png"
import whiteFb from "../../../assets/images/facebook.png"
import whiteTwitter from "../../../assets/images/twitter.png"
import whitePintrest from "../../../assets/images/pinterest.png"
import envelope from "../../../assets/images/envelope.svg"
import call from "../../../assets/images/phone-square.svg"
import rightArrow from "../../../assets/images/caret-right.svg"

function Index() {
  return (
    <Row className='footerRow'>
        <Col className='vertical-col' xs={24} sm={24} md={6}>
          <img src={whiteLogo} alt="" className='footer-logo' />
          <p className='ls-desc'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.</p>
          <Row>

          <img className='envelope-img' src={envelope} alt="" />
          <p className='email-id'>Hello@Email.com</p>
          </Row>
          <Row>

          <img className='envelope-img' src={call} alt="" />
          <p className='email-id'>+91 123 456 789</p>
          </Row>
        </Col>
        <Col className='vertical-col'  xs={24} sm={24} md={6}>
          <h2 className='col-heading raleway'>
            Quick Links
          </h2>
          <Row>
          <img src={rightArrow} alt="" /><p className='pointer'>Home</p>
          </Row>
          <Row>
          <img src={rightArrow} alt="" /><p className='pointer'>Lifescool Ecosystem</p>
          </Row>
          <Row>
          <img src={rightArrow} alt="" /><p className='pointer'>Courses</p>
          </Row>
          <Row>
          <img src={rightArrow} alt="" /><p className='pointer'>Contact</p>
          </Row>
        </Col>
        <Col className='vertical-col'  xs={24} sm={24} md={6}>
        <h2 className='col-heading raleway'>
            Usefull Links
          </h2>
          <Row>
          <img src={rightArrow} alt="" /><p className='pointer'>Lifescool Commune</p>
          </Row>
          <Row>
          <img src={rightArrow} alt="" /><p className='pointer'>Creatormart</p>
          </Row>
          <Row>
          <img src={rightArrow} alt="" /><p className='pointer'>Terms & Conditions</p>
          </Row>
        </Col>
        <Col className='vertical-col'  xs={24} sm={24} md={6}>
        <h2 className='col-heading raleway'>
            Follow Us
          </h2>
         
          <Row>
          <a href=""><img className="social-media" src={whiteFb} alt="" /></a>
          <img className="social-media"src={whiteTwitter} alt="" />
          <img className="social-media"src={whiteInsta} alt="" />
          <img className="social-media"src={whitePintrest} alt="" />
          </Row>
        
        </Col>
        <div className='footer-line'/>
        <div className='company-name-div'>
        <p className='company-name'>© Lifeplug EduTech LLP </p>
        </div>

    </Row>
  )
}

export default Index