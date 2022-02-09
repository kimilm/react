import React, { Component } from "react";
import { ContactDetails } from "./contact_details/ContactDetails";

export class Contact extends Component {
    render() {
        return(
            <div>
                <h1>연락처</h1>
                <p>
                    연락처 작성될 공간...
                </p>
                <ContactDetails />
            </div>
        );
    }
}