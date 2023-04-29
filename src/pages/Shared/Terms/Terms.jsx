import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus iste, placeat eveniet, quia dolor quaerat accusamus mollitia sequi, tenetur laboriosam iure culpa eos ullam.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;