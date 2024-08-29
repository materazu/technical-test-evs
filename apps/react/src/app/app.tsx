import styled from '@emotion/styled';
import { getItemDtoFixture, ItemDto } from '@evs/dtos';
import { ItemsStore, createItemAction, findAllItemsAction } from '@evs/stores';
import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';

export function App() {
  const items: ItemDto[] = useRecoilValue(ItemsStore);
  const setItems: SetterOrUpdater<ItemDto[]> = useSetRecoilState(ItemsStore);

  const callFindItems = async () => {
    await findAllItemsAction(setItems);
  }

  useEffect(() => {
    setTimeout(() => {
      createItemAction(getItemDtoFixture(), setItems);
    }, 2000);
  }, [])

  useEffect(() => {
    console.log('Items:', items);
  }, [items]);

  useEffect(() => {
    callFindItems();
  }, []);

  return (
    <></>
  );
}

export default App;
