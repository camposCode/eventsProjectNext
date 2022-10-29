import React from 'react'
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
<<<<<<< HEAD
import EventSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
=======

>>>>>>> parent of adcc11a (filter form for filtering events added)
export default function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month){
        const fullPath = `/events/${ year }/{ month }`;
        router.push(fullPath);
    }

    return (
<<<<<<< HEAD
        <Fragment>
            <EventSearch onSearch={ findEventsHandler } />
=======
        <div>
>>>>>>> parent of adcc11a (filter form for filtering events added)
            <EventList items = { events } />
        </div>
    )
}
