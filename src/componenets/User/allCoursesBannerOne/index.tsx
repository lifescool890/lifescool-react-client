import { Row ,Typography} from 'antd'
import "./style.scss"

function index() {
  return (
    <Row className='ac-b1-outer'>
      <Typography.Title className='ac-b1-title' style={{color:"white", marginBottom:"50px"}}>
        Welcome to Lifescool Creative Upskilling
      </Typography.Title>
    </Row>
  )
}

export default index