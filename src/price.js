import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Price(args) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{args.property.subscription}</h5>
                    <h6 className="card-price text-center">${args.property.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li><span className="fa-li"><FontAwesomeIcon icon="check" /></span>{args.property.members}</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon="check" /></span>{args.property.storage}Storage</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon="check" /></span>Unlimited Public Projects</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon="check" /></span>Community Access</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon="times" /></span>Unlimited Private Projects</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon="times" /></span>Dedicated Phone Support</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon="times" /></span>{args.property.domain}</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon="times" /></span>Monthly Status Reports</li>
                    </ul>
                    <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
    );
}

export default Price;




