import { Helmet } from 'react-helmet';
import React from 'react';
import './404.css';
import { Link } from 'react-router-dom';

const ErrorPage404 = () => (

    <React.Fragment>
        <div className="page-404">
            <div className="outer">
                <div className="middle">
                    <div className="inner">

                        <div className="inner-circle"><i className="fa fa-home"></i><span>404</span></div>
                        <span className="inner-status">Oops! You're lost</span>
                        <span className="inner-detail">
                            We can not find the page you're looking for.
                            <Link to='/' className="btn btn-info mtl"><i className="fa fa-home"></i>&nbsp;
                                Return home
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <Helmet>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
                integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
        </Helmet>

    </React.Fragment>

)


export default ErrorPage404;