import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is first meetup',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
        address: 'Santorini, Greece',
        description: 'This is first amazing meetup which you definitely should not miss. It will be fun!'
    },
    {
        id: 'm2',
        title: 'This is second meetup',
        image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        address: 'New York, US',
        description: 'This is second amazing meetup which you definitely should not miss. It will be fun!'
    }
]

function AllMeetupsPage() {

    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA}/>
            
        </section>
    );

}

export default AllMeetupsPage;