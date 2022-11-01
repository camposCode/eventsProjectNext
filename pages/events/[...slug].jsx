import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/events/results-title';
import { Fragment } from 'react';
import Button from '../../components/UI/button';
import ErrorAlert from '../../components/UI/error-alert';


export default function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query.slug;
    
    if(!filterData){
        return <p className='center'>Loading...</p>
    }


    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(
        numYear) || 
        isNaN(numMonth) || 
        numYear > 2030 || 
        numYear < 2022 || numMonth < 1 ||
        numMonth > 12){
            return <Fragment>
                    <ErrorAlert>
                    <p>Invalid Filter. Please adjust your values!!!</p>
                    </ErrorAlert>
            </Fragment>
        }
                
                

        const filteredEvents = getFilteredEvents({
            year: numYear,
            month: numMonth
        });

        if(!filteredEvents || filteredEvents === 0){
            return 
                <Fragment>
                    <ErrorAlert>
                        <p>No events found for the chosen filters!!!</p>
                    </ErrorAlert>
                    
                    <div className='center'>
                        <Button link='/events'>Show all Events</Button>
                    </div>
                </Fragment>
        }
                    
            

        const date = new Date(numYear, numMonth - 1);

    return (
        <Fragment>
            <ResultsTitle date={ date }/>
            <EventList items={ filteredEvents }/>
        </Fragment>
    )
}
