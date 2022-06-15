import 'antd/dist/antd.css';
import './App.css';
import { useState, useEffect } from 'react';
import { Divider, Typography, Button } from 'antd';
import { PoweroffOutlined } from "@ant-design/icons";
import styled from 'styled-components';

import EmulationList from './EmulationList';
import AddUrlModal from './AddUrlModal';

import { setStorage, getStorage } from './lib/storage';

const STORAGE_KEY = "view-emulator-settings";

function App() {
  const [list, setList] = useState([]);

  const initializeStorage = async () => {
    const currentSettings = await getStorage({ key: STORAGE_KEY });

    if (!currentSettings || !currentSettings.emulationList) {
      setStorage({ key: STORAGE_KEY, value: {
        enabled: false,
        emulationList: []
      }});
    }

    return currentSettings;
  }

  const getCurrentSettings = async () => {
    return await getStorage({ key: STORAGE_KEY });
  }

  const getEmulationList = async () => {
    const currentSettings = await getCurrentSettings();

    return currentSettings?.emulationList || [];
  }

  const rehydrateEmulationList = async () => {
    const tempList = await getEmulationList();
    console.log(tempList);
    setList(tempList);
  }

  useEffect(() => {
    initializeStorage();

    rehydrateEmulationList();
  }, []);

  const addEmulationItemToStorage = async (values) => {
    const currentSettings = await getCurrentSettings();

    await setStorage({ key: STORAGE_KEY, value: {
      ...currentSettings,
      emulationList: [
        ...currentSettings?.emulationList,
        {
          ...values.currentDevice,
          url: values.url
        }
      ]
    }});
  }

  const deleteEmulationItemFromStorage = async (id) => {
    const currentSettings = await getCurrentSettings();

    await setStorage({ key: STORAGE_KEY, value: {
      ...currentSettings,
      emulationList: currentSettings?.emulationList.filter(item => item.id !== id)
    }});
  }

  const editItem = (e) => {
    console.log("Edit", e);
    // TODO: implement logic here for editing

    // at the end of operation load new data
    rehydrateEmulationList();
  };

  const addItem = async (item) => {
    await addEmulationItemToStorage(item);

    // at the end of operation load new data
    rehydrateEmulationList();
  }

  const deleteItem = async (e) => {
    await deleteEmulationItemFromStorage(e);

    // at the end of operation load new data
    rehydrateEmulationList();
  };

  return (
    <div className="App">
      <StreachedHeader>
        <Typography>Device view emulator</Typography>
        <PoweroffOutlined></PoweroffOutlined>
      </StreachedHeader>
      <Divider></Divider>
      <ListHeader>
      <Typography>Emulation list:</Typography>
      <AddUrlModal onAdd={addItem}></AddUrlModal>
      </ListHeader>
      <EmulationList list={list} onEdit={editItem} onDelete={deleteItem}></EmulationList>
    </div>
  );
}

export default App;

const StreachedHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
