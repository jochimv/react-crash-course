import { useNavigate }  from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    const navigate = useNavigate();

    const addMeetupHandler = (meetupData) => {
        // add the data to meetups, .json is required by firebase
        fetch('https://react-getting-started-bc25a-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData), //javascript objects -> string
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }


    return (
        <section>
            <h1>Add New meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;