import { ADD_ITEM, ITEM_LIST, PagesStore } from '@evs/stores';
import { useRecoilState } from 'recoil';
import { ItemAddForm, ItemList } from './components';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [activePage, setActivePage] = useRecoilState(PagesStore);

  return (
    <>
      <ToastContainer />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Items Manager - EVS
          </Typography>
          <Button color="inherit" onClick={() => setActivePage(ADD_ITEM)}>Add New Item</Button>
        </Toolbar>
      </AppBar>
      {activePage === ITEM_LIST && <ItemList />}
      {activePage === ADD_ITEM && <ItemAddForm />}
    </>
  );
}

export default App;
