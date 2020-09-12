import React from 'react'
import './Navigation.scss';

export default function Navigation() {
    return (
        <div className="container">
            <div className="brand-logo">

            </div>
            
            <nav class="nav nav-tabs nav-stacked">
                <a class="nav-link active" href="#">Active link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled" href="#">Disabled link</a>
            </nav>
                
        </div>
    )
}
