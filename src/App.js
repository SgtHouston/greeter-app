import './App.css';
// import Counter from './components/Counter';
// Step 4- Import greeter 
import Greeter from './components/Greeter';
// import TimeStamp from './components/Timestamp';
// import TimestampClock from './components/TimestampClock';
import Translator from './components/Translator';
import Friend from './components/Friend'
import Name from './components/Name'
import StarRating from './components/StarRating'
import Profile from './components/Profile'
import user1 from './components/user1';
import peopleToGreet from './components/peopleToGreet';
import friends from './components/friends';
import addresses from './components/namefield';
import friendsSR from './components/starratings';
import staffMembers from './components/profilecard';
import Fireworks from './components/fireworks';
import SuperCounter from './components/superCounter';
import StatusPicker from './components/statuspicker';
import LanguagePicker from './components/languagepicker';
import Translator2 from './components/Translator2';
import ProfileForm from './components/ProfileForm'
import NameInput from './components/NameInput';
import JokeApp from './components/JokeApp';

function App() {
  return (
    
    <div className="App">
      {/* 
      // Input the prop info directly
      <Greeter name="Natasha Romanov" />
      <Greeter name="Buddy" /> 
      <Greeter name="Pal" /> */}

      {/* Using a variable as a prop */}
      <Greeter name={user1} />

      {/* displays 'world' string, from the default in the greeter 
      function if no prop name is present */}
      {/* <Greeter />
      <Greeter /> */}

      {/* You can loop over a list using the map function.  
      Second variable allows you to save the index of each 
      variable to use it as a key prop, */}
      { peopleToGreet.map((person, index) => {
        return <Greeter key={index} name={person} />
      })}
      {/* Click up and click down */}
      {/* <Counter />

      <TimeStamp />
      <TimestampClock /> */}
      <Translator initialText="Hello World" />
      <Friend friendName="Bob Belcher" />
      <Name firstName="Steve" lastName="Rogers" />
      <StarRating rating={3} />
      <Profile name="Tony Stark" title="Owner Operator" />

      {/* Looping over components with .map... added empty 
      string option to end of 'Name' function for list with no last names */}
      { friends.map((friend, index) => {
        const names = friend.split(" ")
        const firstName = names[0]
        const lastName = names[1]
        return <Name key = {index} firstName={firstName} lastName={lastName} />
      })}

      {/* Use .map on the following array to display a <Friend /> component for each. */}
      { addresses.map((address, index, first, last) => {
        return <Friend friendName= {address.first + ' ' + address.last}/>
      })}

      {/* Use .map on the following array to display movie details card that 
      includes a title, year, and a <StarRating /> component for each. */}
      {friendsSR.map((friendSR, id) => {
        return (
          <div className="friendSR">
            <div className ="card" id={id} >
              <p className="cardinfo">
                Title: {friendSR.title}
              </p>
              <p className="cardinfo">
                Year: {friendSR.releaseDate.slice(0, 4)}
              </p>
              <p className="cardinfo">
                <StarRating rating={Math.round(friendSR.rating/2)} />
              </p>
            </div>
          </div>
        )
      })}   
      {/* Toggle a button state on click */}
      <Fireworks />

      {/* Mapping over data that needs formatting  */}
      { staffMembers.map((member, index) => {
        return (
          <Profile name={member.name.first + ' ' + member.name.last} title={member.title} id={index} />
        )
      })}

      {/* Changing state */}
      <StatusPicker />
      <br/>
      <LanguagePicker />
      <br/>
      <SuperCounter />  
      <br/>                                                       
      <Translator2 />
      <br/>
      <ProfileForm />
      <NameInput />
      <JokeApp />
    </div>
  );
}

export default App;
