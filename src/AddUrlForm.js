import { Button, Form, Input, Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AddUrlForm = ({ onSubmit, onCancel, deviceList, form }) => {
  // const [form] = Form.useForm();
  const [currentDevice, setCurrentDevice] = useState(null);

  const onDeviceChange = async (value) => {
    const deviceData = deviceList.find(({ id }) => id === value);
    setCurrentDevice(deviceData ? deviceData : null);
  };

  const onFinish = async (values) => {
    console.log(values);
    onSubmit({ ...values, currentDevice });
  };

  const onReset = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="url"
        label="URL"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="device"
        label="Device"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a device"
          onChange={onDeviceChange}
          allowClear
        >
          {
            deviceList?.map(({ id, deviceName, width, height}) => {
              return <Option value={id}>{`${deviceName} - (${width}px x ${height}px)`}</Option>
            })
          }
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      {/* <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item> */}
    </Form>
  );
};

export default AddUrlForm;
