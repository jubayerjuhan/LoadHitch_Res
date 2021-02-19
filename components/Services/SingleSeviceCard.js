import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


const SingleSeviceCard = ({ bgColor, icon }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
                <div className={`icon bg-${bgColor}`}>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <h3>
                    <Link href="#">
                        <a>Service Name</a>
                    </Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default SingleSeviceCard
