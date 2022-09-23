import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OurTeam from './OurTeam';

const Team = () => {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTeam(data));
    }, [])

    return (

        <div >
            <h1 className='text-center text-2xl mt-2 text-yellow-600 font-medium uppercase mb-2'>Our Team Member</h1>

            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    team.map(team => <OurTeam
                        key={team._id}
                        team={team}
                    >
                    </OurTeam>)
                }
            </div>


        </div>
    );
};

export default Team;