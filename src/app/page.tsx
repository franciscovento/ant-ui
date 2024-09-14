import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function Home() {
  return (
    <main>
      <Button type="primary" icon={<SearchOutlined />}>
        Primary Button
      </Button>
    </main>
  );
}
