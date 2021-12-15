import React, {useEffect, useState} from 'react'
import {Form, Button, Spinner} from 'react-bootstrap';
import axios from "axios";
import { HALO_URL } from "../config";
import {useParams} from 'react-router-dom';
import Ratings from './Ratings';


function Reviews() {

    const [review, setReview] = useState([])
    const {missionId} = useParams()
    // const [mission, setMission] = useState(null)
    const [missionsDetail, setMissionsDetail] = useState(missionId);
    // console.log(missionsDetail)


    useEffect(() => {
        const fetchData = async () => {
            
           let response = await axios.get(`${HALO_URL}/missions/${missionId}`, {withCredentials: true})
           setMissionsDetail(response.data)
        }
        fetchData()
    }, [])
    //----------------------------------------------------------------------------------------

   

    const handleReview = async (event) => {
        event.preventDefault();
        let newReview = {
           rate: event.target.rate.value,
           comments: event.target.comments.value,
        }

        let response = await axios.post(`${HALO_URL}/profile/mymissions/${missionId}/review`, newReview, {
            withCredentials: true,
          });
        
       setReview([response.data, ...review])
    }

    if( !missionsDetail) {
        return <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    }
    return (
        <div>
           <Form onSubmit={handleReview}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <h1>{missionsDetail.name}</h1>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comment:</Form.Label>
                <Form.Control name="comments" as="textarea" placeholder="Insert a comment" rows={2} />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's rating:</Form.Label>
                <Ratings />
            </Form.Group>      
            
            <Button type="submit" variant="outline-success">Save Review</Button>{' '}            
            </Form>                       
        </div>
    )
}

export default Reviews
