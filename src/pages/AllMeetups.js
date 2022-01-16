import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-bc25a-default-rtdb.firebaseio.com/meetups.json')
            .then(resp => resp.json())
            .then(data => { //data is a messenger object composed of multiple objects (meetups)
                const meetups = [];
                for (const key in data) { //key is the reference for the object (meetup)
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);


    if (isLoading) {
        return <p>Loading</p>
    }
    return <section>
        <h1>All meetups</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>
}

export default AllMeetupsPage;