import './App.css';
import Box from './components/boxes/Box';
import Nav from './components/nav/Nav';
import Hero from '../src/components/hero/Hero'
import program from '../src/components/assets/event_available_black_24dp 2.png'
import place from '../src/components/assets/location_on_black_24dp 1.png'
import people from '../src/components/assets/groups_black_24dp (1) 1.png'
import product from '../src/components/assets/Product 3.png'
import Add from './components/add/Add';
import Heroo from './hero-2/Heroo';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
     <Nav/>
    <Hero/>
<div className="boxes">
  <div className="boxes-1">
    <Box img={people} title={'People'} para={
      'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.'
    }
    connect={'Connect'}
     />
    <Box img={place}
    title={'Place'} para={
      'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.'
    }
    connect={'Meet up'}
    />
  </div>
  <div className="boxes-1">
    <Box img={product}
    title={'Product'} para={
      'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.'
    }
    connect={'Get it'}
    />
    <Box img={program}
    title={'Program'} para={
'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.'
    }
    connect={'Attend'}
    />
  </div>
</div>

<Add/>
<Testimonial/>
<Heroo/>
<Footer/>

    </div>

  );
}

export default App;
