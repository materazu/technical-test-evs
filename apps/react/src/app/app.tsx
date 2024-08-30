import { ADD_USER, USER_LIST, PagesStore } from '@evs/stores';
import { useRecoilState } from 'recoil';
import { UserAddForm, UsersList } from './components';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [activePage, setActivePage] = useRecoilState(PagesStore);

  const handleButtonClick = () => {
    setActivePage(ADD_USER)
  };

  return (
    <>
      <ToastContainer />
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            data-testid="app-title"
          >
            Users Manager - EVS
          </Typography>
          <Button
            color="inherit"
            onClick={() => handleButtonClick()}
            data-testid="add-user-button"
          >Add New User</Button>
        </Toolbar>
      </AppBar>
      {activePage === USER_LIST && <UsersList />}
      {activePage === ADD_USER && <UserAddForm />}
    </>
  );
}

export default App;
