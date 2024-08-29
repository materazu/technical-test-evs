import { ItemDto } from '@evs/dtos';
import { findAllItemsAction, ItemsStore } from '@evs/stores';
import { Box, Card, CardContent, Container, Grid2, Link, Typography } from '@mui/material';
import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';

export const ItemList = () => {
  const items: ItemDto[] = useRecoilValue(ItemsStore);
  const setItems: SetterOrUpdater<ItemDto[]> = useSetRecoilState(ItemsStore);

  const callFindItems = async () => {
    await findAllItemsAction(setItems);
  }

  useEffect(() => {
    callFindItems();
  }, []);

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2} margin={10}>
          {items.map((item) => (
            <Card sx={{ minWidth: 275 }} key={item.firstName}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {item.firstName} {item.lastName}
                </Typography>
                <Typography component="div" marginBottom={1}>
                  {item.age} years old
                </Typography>
                <Typography variant="body2">
                  Email: <Link href={`mailto:${item.email}`}>{item.email}</Link>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}
