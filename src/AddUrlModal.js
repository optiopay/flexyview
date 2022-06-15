import { Button, Modal, Form } from 'antd';
import React, { useState, useEffect } from 'react';

import AddUrlForm from './AddUrlForm';
import { setStorage, getStorage } from './lib/storage';

import { phones } from './assets/device-list';

const STORAGE_KEY = "view-emulator-settings";

const AddUrlModal = ({ onAdd }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [deviceList, setDeviceList] = useState([]);

  // parse device list, set to local variable
  // store settings (empty set) to sync storage
  useEffect(() => {
    const parsedDeviceList = phones.map(({ id, deviceName, width, height, deviceScaleFactor }) => ({
      id, deviceName, width, height, deviceScaleFactor
    }));

    setDeviceList(parsedDeviceList);
  }, []);

  const onModalOk = () => {
    form.submit();
  }

  const onModalCancel = () => {
    form.resetFields();
  }

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async (values) => {
    setConfirmLoading(true);

    // TODO: implement feedback loop
    await onAdd(values);

    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
    <Button type="primary" onClick={showModal}>
        Add new emulation
      </Button>
      <Modal
        title="Enter URL and select device to emulate rendering"
        visible={visible}
        onOk={onModalOk}
        confirmLoading={confirmLoading}
        onCancel={onModalCancel}
      >
        <AddUrlForm onSubmit={handleOk} onCancel={handleCancel} deviceList={deviceList} form={form}></AddUrlForm>
      </Modal>
    </>
  );
};

export default AddUrlModal;