import React from "react";
export default function Contact() {
  return (
    <>
      <h1> contact us:</h1>

      <form action="https://formsubmit.co/yehooda10@email.com" method="POST">
        <input type="hidden" name="_subject" value="New submission!" />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="hidden"
          name="_next"
          value="https://office.com/thankyou.html"
        />
        <input
          type="text"
          name="massage"
          placeholder="writh your massage here"
          required
        />

        <button type="submit">Send</button>
      </form>
    </>
  );
}
