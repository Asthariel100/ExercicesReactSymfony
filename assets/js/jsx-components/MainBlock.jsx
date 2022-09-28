import React from 'react';
import Content from './Content'
import '../../styles/main-block.scss';



const MainBlock = () => {
    return(

        <div className="mainblock">
            <div className="background-main">
                <div className="background-second">
                    <Content/>
                    </div>                           
            </div>
        </div>
        
    );
};

export default MainBlock