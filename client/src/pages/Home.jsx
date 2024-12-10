import { useState } from 'react';
import Luffy from "../images/luffy.jpeg";
import Zoro from "../images/zoro.jpeg";
import Nami from "../images/nami.jpeg";
import Usopp from "../images/usopp.jpeg";
import Sanji from "../images/sanji.jpeg";
import Chopper from "../images/chopper.jpeg";
import Robin from "../images/robin.jpeg";
import Franky from "../images/franky.jpeg";
import Brook from "../images/brook.jpeg";
import Jinbe from "../images/jinbe.jpeg";
import '../styles/home.css';

const Home = () => {
  const [formState, setFormState] = useState({
    chatacterName: '',
    episode: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    chatacterName: '',
    episode: '',
    budget: '',
    message: '',
  });

  const handleBlur = (e) => {
      const { id, value } = e.target;
      if (!value) {
          setErrors((prevErrors) => ({
              ...prevErrors,
              [id]: `${id.charAt(0).toUpperCase() + id.slice(1)} is required`,
          }));
      } 
  };

  const handleChange = (e) => {
      const { id, value } = e.target;
      setFormState((prevFormState) => ({
          ...prevFormState,
          [id]: value,
      }));
      if (value) {
          setErrors((prevErrors) => ({
              ...prevErrors,
              [id]: '',
          }));
      }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!formState.chatacterName || !formState.episode || !formState.budget || !formState.message) {
          setErrors({
              chatacterName: !formState.chatacterName ? 'Chatacter Name is required' : '',
              episode: !formState.episode ? 'Episode is required' : '',
              budget: !formState.budget ? 'Budget is required' : '',
              message: !formState.message ? 'Message is required' : '',
          });
          return;
      }
  
      alert('Form submitted successfully!');
      setFormState({
        chatacterName: '',
        episode: '',
        budget: '',
        message: '',
      });
  };
  
  const CharacterList = [ Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe ];

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="chatacterName">Character Name</label><br />
            <input
              type="text"
              className={`form-control ${errors.chatacterName ? 'is-invalid' : ''}`}
              id="chatacterName"
              placeholder='Straw Hat Crew Only'
              value={formState.chatacterName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.chatacterName && <div className="invalid-message">{errors.chatacterName}</div>}
          </div>
          <div>
            <label htmlFor="episode">Costume In Which Episode</label><br />
            <input
              type="text"
              className={`form-control ${errors.episode ? 'is-invalid' : ''}`}
              id="episode"
              placeholder='Newest Episode: 1122'
              value={formState.episode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.episode && <div className="invalid-message">{errors.episode}</div>}
          </div>
          <div>
            <label htmlFor="budget">Budget</label><br />
            <input
              type="text"
              className={`form-control ${errors.budget ? 'is-invalid' : ''}`}
              id="budget"
              placeholder='We charge 10% of your budget (or minimum $20) as deposit'
              value={formState.budget}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.budget && <div className="invalid-message">{errors.budget}</div>}
          </div>
          <div>
            <label htmlFor="message">Message</label><br />
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="message"
              rows="3"
              placeholder='Sizes & Details about the costume'
              value={formState.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && <div className="invalid-message">{errors.message}</div>}
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>

      <div className="flex-row" id="wanted-poster-container">
        {CharacterList.map((character, index) => (
          <div key={index} className="character-item" >
            <img src={character} alt={`Character ${index}`} id="wanted-poster"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
