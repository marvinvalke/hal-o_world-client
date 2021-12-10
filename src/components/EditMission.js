import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { HALO_URL } from "../config";
import axios from "axios";
import {Spinner, Form, Button} from 'react-bootstrap';
import DifficultyLevel from './DifficultyLevel';

function EditMission(props) {

    const {missionId} = useParams();
    const [missionsDetail, setMissionsDetail] = useState(missionId);
    const {editButton} = props;

    //-----axios req to fetch info from the selected mission--------------
    useEffect(() => {
        const fetchData = async () => {
            
           let response = await axios.get(`${HALO_URL}/missions/${missionId}`, {withCredentials: true})
           setMissionsDetail(response.data)
        }
        fetchData()
    }, [])
    //--------------------------------------------------------------------
    //------------------loading content from api -------------------------
    if( !missionsDetail) {
        return <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    }
    //-------------------------------------------------------------------

    return (
        <div className="test">
           <Form  onSubmit={(event) => { editButton(event, missionsDetail._id)  }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's name:</Form.Label>
                <Form.Control  type="text" placeholder={missionsDetail.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mission's description:</Form.Label>
                <Form.Control  as="textarea" placeholder="Insert mission's description" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's image:</Form.Label>
                <Form.Control placeholder={missionsDetail.image} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's duration:</Form.Label>
                <Form.Control  type="text" placeholder={missionsDetail.duration} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's difficulty:</Form.Label>
                    <DifficultyLevel />                
            </Form.Group>
            </Form> 
            
            {/* <form>
                <input defaultValue={missionsDetail.name} name="name"  type="text"  placeholder="Enter name"/>
                <input name="description"  type="text"  placeholder="Enter desc"/>
                <input name="image"  type="text"  placeholder="Enter desc"/>
                <input name="duration"  type="text"  placeholder="Enter desc"/>
                <input name="difficulty"  type="text"  placeholder="Enter desc"/>
            </form> */}

            <Button type="submit" variant="outline-success">Save changes</Button>{' '}
        </div>
    )
}

export default EditMission
