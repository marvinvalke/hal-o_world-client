import React from 'react';
import {Form} from 'react-bootstrap';
import DifficultyLevel from './DifficultyLevel';

function CreateMissions(props) {
   
    const {createButton} = props;
    

    return (
        <div className="test">
           <Form  onSubmit={(event) => { createButton(event)  }} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's name:</Form.Label>
                <Form.Control className="mb-3" name="name" type="text" placeholder="Insert mission's name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mission's description:</Form.Label>
                <Form.Control className="mb-3" name="description" as="textarea" placeholder="Insert mission's description" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's image:</Form.Label>
                <Form.Control className="mb-3" type="file"  name="myImage"  accept="image/png, image/jpg" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's duration:</Form.Label>
                <Form.Control className="mb-3" name="duration" type="text" placeholder="Insert mission's duration" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mission's difficulty:</Form.Label>
                    <DifficultyLevel />                
            </Form.Group>
            <button class="avatar2" type="submit" variant="outline-success">Save </button>{' '}
        </Form>                 
            
        </div>
    )
}

export default CreateMissions
