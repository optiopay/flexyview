import { List, Skeleton } from 'antd';
import { TabletOutlined } from "@ant-design/icons";

const EmulationList = ({ list, onEdit, onDelete}) => {
  return (
    <>
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit" onClick={() => onEdit(item.id)}>edit</a>, <a key="list-loadmore-more" onClick={() => onDelete(item.id)}>delete</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<TabletOutlined />}
              title={`${item.url}`}
              description={`${item.deviceName} - Resolution: width: ${item.width}px --- height: ${item.height}px`}
            />
          </Skeleton>
        </List.Item>
      )}
    />
    </>
  );
};

export default EmulationList;
