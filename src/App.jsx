
import './App.css'

import Card from './components/Card';
import contacts from './contacts';
// import Avatar from './components/Avatar';

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      learning={contact.learning}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Learnable Leaderboard</h1>
      {/* <Avatar img="https://learnable.genesystechhub.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogolearnableLogo.772a7eef.png&w=640&q=75" /> */}

      {contacts.map(createCard)}
    </div>
  );
}


export default App;