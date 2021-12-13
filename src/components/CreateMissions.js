import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { HALO_URL } from "../config";
import axios from "axios";
import {Form, Button} from 'react-bootstrap';
import DifficultyLevel from './DifficultyLevel';

function CreateMissions(props) {
   
    const {createButton} = props;
    

    return (
        <div className="test">
           <Form  onSubmit={createButton} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's name:</Form.Label>
                <Form.Control name="name" type="text" placeholder="Insert mission's name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mission's description:</Form.Label>
                <Form.Control name="description" as="textarea" placeholder="Insert mission's description" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's image:</Form.Label>
                <Form.Control name="image" placeholder="Select mission's image" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's duration:</Form.Label>
                <Form.Control name="duration" type="text" placeholder="Insert mission's duration" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's difficulty:</Form.Label>
                    <DifficultyLevel />                
            </Form.Group>
        </Form>                 
            <Button type="submit" variant="outline-success">Save changes</Button>{' '}
        </div>
    )
}

export default CreateMissions
