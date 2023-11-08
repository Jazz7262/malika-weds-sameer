import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
  return (
    <section id="invite-note">
      <div className="invite-note-wrapper">
        <h5>An Invitation from:</h5>
        <h2>Mrs. & Mr. Syed Mohammed Ayub</h2>

        {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
        <h5 className="address mb-3">
          Residence: Pension Lane, Mohammed Nagar,
          <br /> New Bownpally,
          <br /> Secunderabad.
        </h5>
        <p className="address">
          Contact: <br />
          +91 93910 98812.
        </p>
      </div>
    </section>
  );
}

export default InviteNote;
