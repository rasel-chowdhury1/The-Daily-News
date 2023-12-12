import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';


const RightNav = () => {
    return (
        <div>
            <h3>Login With </h3>
            <Button className='mb-2' variant="outline-primary"><FaGoogle/> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub/> Login With Github  </Button>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Qzone></Qzone>
            </div>
        </div>
    );
};

export default RightNav;