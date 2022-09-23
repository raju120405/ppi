import React from 'react';


const OurTeam = ({team}) => {
    const {name , picture, email, Institute, Department,address } = team;
    return (
        <div>
           
           
            <div class="px-12 card card-compact w-96 bg-base-100 shadow-xl mt-5">
                <figure><img className='object-cover h-40 w-96' src={picture} alt="Shoes" /></figure>
                {/* <img src={picture} alt="" /> */}
                <div class="card-body">
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Department: {Department}</p>
                    <p>E-mail: {email}</p>
                    <p>Institute: {Institute}</p>
                    <p>Home Address: {address}</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;