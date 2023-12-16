import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque perferendis, a quo accusamus eveniet sequi. Dolor, quod inventore. Minima ab doloremque inventore sed exercitationem dolor.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default TermsCondition;