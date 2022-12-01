import React from 'react';

import { Banner } from './banner';
import { NewsandEvents } from './news-events';
import { Testimonials } from './testimonials';
import { Count } from './count';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                {/* Home Banner */}
                <Banner />
                {/* Home Banner */}

                {/* Count Section */}
                <Count />
                {/* Count Section */}

                {/* Testimonials */}
                <Testimonials />
                {/* Testimonials */}

                {/* Events Section */}
                <NewsandEvents />
                {/* Events Section */}
            </div>
        )
    }
}
export { Home };