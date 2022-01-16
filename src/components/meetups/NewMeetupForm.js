import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props) {

    const titleInput = useRef(); //connected via ref={titleInput}
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();


    function submitHandler(event) {
        event.preventDefault(); //prevent from reloading

        const title = titleInput.current.value;  
        const image = imageInput.current.value;
        const address = addressInput.current.value;
        const description = descriptionInput.current.value;   
        
        const meetupData = {
            title: title,
            image: image,
            address: address,
            description: description
        };

        props.onAddMeetup(meetupData);
    }


    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type='text' required id='title' ref={titleInput}></input>
                </div>

                <div className={classes.control} >
                    <label htmlFor='image'>Image</label>
                    <input type='url' required id='image' ref={imageInput}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address'  ref={addressInput}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5'  ref={descriptionInput}></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;