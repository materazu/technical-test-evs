import { UserDto } from '@evs/dtos';
import { getAllUsersAction, UsersStore } from '@evs/stores';
import { Box, Card, CardContent, Container, Grid2, Link, Typography } from '@mui/material';
import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';

export const UsersList = () => {
  const users: UserDto[] = useRecoilValue(UsersStore);
  const setUsers: SetterOrUpdater<UserDto[]> = useSetRecoilState(UsersStore);

  const callFindUsers = async () => {
    await getAllUsersAction(setUsers);
  }

  useEffect(() => {
    callFindUsers();
  }, []);

  return (
    <Container maxWidth="xl" data-testid="users-list">
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2} margin={10}>
          {users.map((user) => (
            <Card sx={{ minWidth: 275 }} key={user.firstName} data-testid="user-card">
              <CardContent>
                <Typography gutterBottom variant="h5" data-testid="user-card-name">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography component="div" marginBottom={1} data-testid="user-card-age">
                  {user.age} years old
                </Typography>
                <Typography variant="body2" data-testid="user-card-email">
                  Email: <Link href={`mailto:${user.email}`}>{user.email}</Link>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}
