import React from 'react';

const Contact = () => {

  return (
    <div className="mt-5">
      <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
      <form>
        <label htmlFor="fname">Nom:</label><br/>
        <input type="text" id="fname" name="fname"/><br/>
        <label htmlFor="lname">Message:</label><br/>
        <textarea id="message" name="message"/><br/><br/>
        <input type="submit" value="Submit"/>
      </form> 
    </div>
  )
}

export default Contact;