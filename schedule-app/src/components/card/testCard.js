import React, { useState } from 'react'
import './сard.css';
import { Card, Input, Tag, Divider, Rate, Space, Row, Col } from 'antd';
import Feedback from './feedback';
import SimpleMap from './map';
import './testCard.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';

const { TextArea } = Input;
const { Meta } = Card;


const TestCard = (props)=> {

  const [color, setColor] = useState('');
  const [display, setDisplay] = useState('block');

    React.useEffect(() => {
      if (props.event.type === 'Deadline') {setColor('red')}
      if (props.event.type === 'Self education') {setColor('green')}
      if (props.event.type === 'Task') {setColor('orange')}
      if (props.event.type === 'Test') {
        setColor('blue');
        setDisplay('none');
      }
      if (props.event.type === 'Lecture') {setColor('cyan')}
      if (props.event.type === 'Screening') {setColor('magenta')}
    },[]) 
    
    

    const { event: {dateTime, time, type, name, timePass, description, descriptionUrl, place, comment}} = props;
    return (
      <Row>
        <Card
          className="card m-auto" 
          title={name}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined 
              key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}>
          
          <Tag color={color}>{type}</Tag> 
          <span>{dateTime}</span>
          <span className="p-2">{time}</span>
          <span className="float-right"><Rate allowHalf defaultValue={2.5} /></span>
          <Divider  orientation="left">Описание:</Divider>
          <p>{description}</p>
          <a href={descriptionUrl} display={display}>Ссылка на ТЗ</a><br />
          <Row className="m-3">
            <iframe className="m-auto"  src="https://youtube.com/embed/0M9Rz-wXYas" width="480" height="360" allowFullScreen></iframe>
          </Row>
          <Divider  orientation="left">Место проведения:</Divider>
          <p>{place}</p>
          <Row className="m-3">
            <div className="m-auto" style={{width: '480px', height: '360px'}}>
              <SimpleMap/>
            </div>
          </Row>
          
          <p>{comment}</p>
          <Feedback/>
        </Card>
      </Row>
      
    )  
}

export default TestCard;