import React from 'react';
import './Navigation.scss';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
export default function Navigation() {
    return (
        <div className="custom-container">
            <div className="logo">
                    Matthew
            </div>
            <ul className="navigationBar">
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                    <h5 class="text-white h4">Collapsed content</h5>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        </div>
    )
}
