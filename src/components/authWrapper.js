import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 890px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const FormContainer = styled.div`
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function AuthWrapper() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData;

    const user = {
      email,
      password,
    };

    fetch('/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user), 
    })
      .then((response) => {
        if (response.status === 201) {
          alert('Користувача успішно зареєстровано!');
        } else {
          alert('Помилка реєстрації користувача.');
        }
      })
      .catch((error) => {
        console.error('Помилка під час виконання POST-запиту:', error);
      });
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image src="https://res.cloudinary.com/teamprojectavatar/image/upload/v1697915124/TestTask/itfbavpldxaouak5enzm.jpg" alt="city view" />
      </ImageContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Button type="submit">Register</Button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}

export default AuthWrapper;
