import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

function EditMission() {

    const {missionId} = useParams();
    const [missionsDetail, setMissionsDetail] = useState(missionId);



    return (
        <div>
            
        </div>
    )
}

export default EditMission
