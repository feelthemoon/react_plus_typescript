import React from "react";
import {useHistory} from 'react-router-dom';
export const AboutPage: React.FC = () => {
    const history = useHistory();
    return(
        <>
            <h1>Info page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores, consectetur corporis cumque excepturi nesciunt nostrum obcaecati officia quae quasi quos rem repudiandae sint veritatis voluptatum? Explicabo ipsam odio temporibus tenetur! Facere, libero, nobis. Aliquam corporis cupiditate debitis eligendi error eum iste maxime mollitia nobis, porro quaerat ratione rem vitae.</p>
            <button className="btn" onClick={() => history.push('/')}>Turn back</button>
        </>
    )
}