import React from "react";

function EmailForm() {
    return ( 
        <div>
            <form>
                <input type="text"
                placeholder="Full Name"
                name="user_name" required/>
                <input type="email"
                placeholder="Email"
                name="user_email" required/>
                <input type="text"
                placeholder="Subject"
                name="subject" required/>
                <textarea type="text"
                placeholder="Subject"
                name="subject" required/>

            </form>
        </div>
     );
}

export default EmailForm;