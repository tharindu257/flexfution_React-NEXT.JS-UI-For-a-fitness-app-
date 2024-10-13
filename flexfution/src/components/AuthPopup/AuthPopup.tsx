import React from 'react';
import './AuthPopup.css';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';

import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'


interface AuthPopupProps {
  setShowpopup: React.Dispatch<React.SetStateAction<boolean>>;
}


const AuthPopup:React.FC<AuthPopupProps>= ({setShowpopup}) =>{
  const [showSignup, setShowSignup] = React.useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className='popup'>
      <button className ='close' onClick={()=>{setShowpopup(false)}}><AiOutlineClose/></button>
      <div className='authform'>
        <div className='left'>
          <Image src={logo} alt="logo" />
        </div>

        <div className='right'>
          {showSignup ? (
            <>
              <h1>Sign Up and Fuse with Us to be More Flexible</h1>
              <form onSubmit={handleSignup}>
                <Input color="primary" placeholder="Email Address" size="md" variant="outlined" required />
                <Input color="primary" placeholder="Password" size="md" variant="outlined" type="password" required />
                
                <div className='form_input_leftright'>
                  <Input variant="outlined" type="number" placeholder="Age" required />
                  <Input variant="outlined" type="number" placeholder="Weight (lbs)" required />
                </div>

                <Select color="primary" size='lg' placeholder="Gender"   variant="outlined" required>
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>

                <label>Height</label>
                <div className='form_input_leftright'>
                  <Input variant="outlined" type="number" placeholder="ft" required />
                  <Input variant="outlined" type="number" placeholder="in" required />
                </div>

                <button type="submit">Sign Up</button>
              </form>
              <p>Don't have an account? <button onClick={() => setShowSignup(false)}>Log In</button></p>
            </>
          ) : (
            <>
              <h1>Log In and Fuse with Us to be More Flexible</h1>
              <form onSubmit={handleLogin}>
                <Input color="primary" placeholder="Email Address" size="lg" variant="outlined" required />
                <Input color="primary" placeholder="Password" size="lg" variant="outlined" type="password" required />

                <button type="submit">Log In</button>
              </form>
              <p>Don't have an account? <button onClick={() => setShowSignup(true)}>Sign Up</button></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;

