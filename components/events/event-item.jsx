import Link from 'next/link'
import React from 'react'

export default function EventItem({ title, image, date, location, id }) {

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // const formattedAddress = location.replace(',', 'n');

    const exploreLink = `/events/${ id }`;
    

    return (
        <li>
            <img src={ '/' + image } alt={ title } />
            <div>
                <div>
                    <h2>{ title }</h2>
                    <div>
                        <time>{ humanReadableDate }</time>
                    </div>
                    <div>
                        {/* <address>{ formatteAddress }</address> */}
                    </div>
                </div>

                <div>
                    <Link href={ exploreLink }>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}


