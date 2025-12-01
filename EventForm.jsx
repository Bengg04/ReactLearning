const { useState } = React;

export function EventRSVPForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [pref, setPref] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [submited, setSubmited] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setSubmited(true);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          type="text"
        />
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          type="email"
        />
        <input 
          value={number} 
          onChange={(e) => setNumber(e.target.value)} 
          required 
          type="number"
        />
        <input 
          value={pref} 
          onChange={(e) => setPref(e.target.value)} 
          type="text"
        />
        <input 
          checked={plusOne} 
          onChange={(e) => setPlusOne(e.target.checked)} 
          type="checkbox"
        />
        <button type="submit">Submit</button>
      </form>

      {submited && (
        <div className="submission-summary">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of attendees: {number}</p>
          <p>Dietary preferences: {pref}</p>
          <p>Additional guests: {plusOne ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
