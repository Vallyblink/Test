import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 890px;
  height: 943px;

`;

const Image = styled.img`
  object-fit: cover;
`;

const FormContainer = styled.div`
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormGroup = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  margin-top: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgba(178, 159, 126, 1);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const TextLink = styled.a`
  color: rgba(178, 159, 126, 1);
  text-decoration: none;
  text-align: right;
  font-size: 14px;
  margin-top: 5px;
  align-self: flex-end;
`;

const Title = styled.h1`
  text-align: start;
  font-size: 24px;
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
        <Title>Логін</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Email"
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
              placeholder="Password"
            />
          </FormGroup>
          <Button type="submit" onClick={() => window.location.href = 'main'}>Register</Button>
          <TextLink href="#">Forgot password?</TextLink>
        </Form>
        <TextLink href="#">Don't have an account? Sign Up</TextLink>
      </FormContainer>
    </Wrapper>
  );
}

export default AuthWrapper;
