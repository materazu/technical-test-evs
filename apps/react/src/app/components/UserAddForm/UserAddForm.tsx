import { UserDto } from '@evs/dtos';
import { createUserAction, USER_LIST, UsersStore, PagesStore } from '@evs/stores';
import { Button, Container, Grid2, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';

export const UserAddForm = () => {
  const setActivePage = useSetRecoilState(PagesStore);
  const setusers: SetterOrUpdater<UserDto[]> = useSetRecoilState(UsersStore);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const user: UserDto = {
      firstName,
      lastName,
      email,
      age: +age,
    };

    await createUserAction(user, setusers);
    toast.success('user added successfully!');

    setFirstName('');
    setLastName('');
    setEmail('');
    setAge('');

    returnToList();
  };

  const returnToList = () => {
    setActivePage(USER_LIST);
  };

  return (
    <Container maxWidth="md" data-testid="add-user-form">
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        marginTop={5}
        data-testid="add-user-form-title"
      >
        Add new user
      </Typography>

      <form
        autoComplete="off"
        onSubmit={(event) => handleSubmit(event)}
      >
        <Grid2 container spacing={2} marginTop={5}>
          <TextField
            required
            id="firstname"
            label="Firstname"
            variant="outlined"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            data-testid="first-name-input"
          />
          <TextField
            required
            id="lastname"
            label="Lastname"
            variant="outlined"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            data-testid="last-name-input"
          />
        </Grid2>

        <Grid2 container spacing={2} marginTop={5}>
          <TextField
            required id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            data-testid="email-input"
          />
          <TextField
            required
            id="age"
            label="Age"
            variant="outlined"
            type="number"
            helperText="From 18 to 99"
            InputProps={{ inputProps: { min: 18, max: 99 } }}
            value={age}
            onChange={(event) => setAge(event.target.value)}
            data-testid="age-input"
          />
        </Grid2>

        <Grid2
          container
          spacing={2}
          marginTop={5}
          justifyContent='end'
        >
          <Button
            variant="outlined"
            color="error"
            onClick={() => returnToList()}
            data-testid="cancel-button"
          >Cancel</Button>
          <Button
            type="submit"
            variant="contained"
            data-testid="submit-button"
          >Create</Button>
        </Grid2>
      </form>
    </Container>
  );
}
