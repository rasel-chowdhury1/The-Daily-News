import React from 'react';

import one from  '../../../assets/qZone1.png';
import two from  '../../../assets/qZone2.png';
import three from  '../../../assets/qZone3.png';

const Qzone = () => {
    return (
        <div className='bg-secondary'>
             <h4>Q-Zone</h4>
             <div>
                <img src={one} alt="qZone-image1" />
                <img src={two} alt="qZone-image2" />
                <img src={three} alt="qZone-image3" />
             </div>    
        </div>
    );
};

export default Qzone;