import React, { Suspense, useEffect, useState } from 'react';
import { Todo } from 'types/Types';
import { Button, TextInput } from '@mantine/core';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    // 初回レンダー時にデフォルトのデータをセット
    const defaultTodoList = [
      {
        id: 1,
        text: '宿題をやる',
        completed: false,
      },
      {
        id: 2,
        text: '部屋を片付ける',
        completed: true,
      },
      {
        id: 3,
        text: 'メールを送る',
        completed: false,
      },
    ];

    setTodoList(defaultTodoList);
  }, []);

  return (
    <Suspense>
      <div>
        <TextInput placeholder="Input your Task" label="Task" withAsterisk />
        <br />
        <Button>Add!</Button>
      </div>
    </Suspense>
  );
};

export default Home;
