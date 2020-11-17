import React from 'react';
import HOC from './hoc';
import {
    Layout,
    Card,
    Button,
    Row,
    Col,
  } from "antd";
import './style.css';
import Modal from 'antd/lib/modal/Modal';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const { Meta } = Card;

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            modal: false
        };
    }

handleClick = () =>{
    this.setState({
        likes: this.state.likes + 1,
        modal: true
    });
};

Login = () => {
    this.setState({
        modal: false
    });
}

render(){
    const musicCardList = [
        {
          id: 1,
          catagory_id: 100,
          name: 'ትዝታ',
          img: './Assets/kirar.jpeg',
          discription: 'ትዝታ; English: memory, "nostalgia" or "longing" is a music genre in Ethiopia and Eritrea consisting of ballad form. Western sources often compare tizita to the blues. Azmaris irst introduced tizita.[1] Modern Ethiopian artists who have performed tizita songs include Aster Aweke  and Haile Merdi'
        }, 
        {
            id: 3,
            catagory_id: 100,
            name: 'ባቲ',
            img: './Assets/bati.jpeg',
          discription: 'ባቲ; English: memory, "nostalgia" or "longing" is a music genre in Ethiopia and Eritrea consisting of ballad form. Western sources often compare tizita to the blues. Azmaris irst introduced tizita.[1] Modern Ethiopian artists who have performed tizita songs include Aster Aweke  and Haile Merdi'

        },
        {
          id: 2,
          catagory_id: 100,
          name: 'አምባሠል',
          img: './Assets/ambasel.jpeg',
          discription: 'አምባሠል The Ambassel scale is a pentatonic scale widely used in the Gonder and Wollo regions of Ethiopia. The notes of the scale (in the key of C) are C, Db, F, G and Ab. It can be viewed as a pentatonic subset of the natural minor scale'
        }, 
        
      
    ]
   
    return(
        <div data-testid="home">
           <Content>
            <div className="site-layout-content" >
            
                <Row gutter style={{paddingTop:'2%'}} >
                     {musicCardList.map((playList, id) => (
                        <Col className="gutter-row" style={{ float:'left'}} span={8} key={id}>
                            <a>
                                <Card hoverable
                                    style={{ width: '100%', boxShadow: 'red' }} 
                                    key={id}
                                    >
                                        <Row>
                                        <Col span={12}>
                                        <img 
                                            className='rootImg'
                                            alt="example"
                                            src= {playList.img}
                                        />
                                    <Meta
                                    style={{paddingTop: '8%', }}
                                    title= {playList.name}
                                    />
                                    </Col>
                                    <Col span={12}>
                                        <p>{playList.discription}</p>
                                        <button onClick={this.handleClick} style={{ float:'right'}}>List Songs</button>
                                    </Col>
                                    </Row>
                                </Card>
                            </a>
                        </Col>
                    ))}
              
                    </Row>
            </div>
          </Content>
            {this.state.modal && (
                <Modal
                  title="Want to Access Songs?"
                  visible={this.state.modal}
                  onCancel={!this.state.modal}
                  footer={[
                      <>
                        <Link to="/Login">
                            <Button key="submit" type="primary">
                                Login
                            </Button>
                        </Link>
                        <Button key="submit" onClick={this.Login}>
                        Cancel
                         </Button>
                    </>
                  ]}
                >
                  <p>Want to access to ssong collection? You need to login for that</p>
                </Modal>
            )}
            
        </div>
    );
    
 }
}

const EnhanceLike = HOC(Home);

export default EnhanceLike;



