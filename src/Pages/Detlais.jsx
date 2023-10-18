import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detlais = () => {

    const singledata = useLoaderData()

      console.log(singledata)
    return (
        <div>
details
        </div>
    );
};

export default Detlais;