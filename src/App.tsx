import { useState, useEffect } from 'react';

import styles from './App.module.css';

import logoSVG from '@assets/logo.svg';
import clipboardPNG from '@assets/clipboard.png';

import CreateButton from '@components/CreateButton';
import TextInput from '@components/TextInput';
import Badge from '@components/Badge';
import CardItem from '@components/CardItem';

import { TaskDTO } from '@DTO/TaskDTO';

import { uuidv4 } from '@utils/uuid';

function App() {

  // States
  const [inputTask, setInputTask] = useState<string>("");
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [taskList, setTaskList] = useState<TaskDTO[]>([]);

  // Effects
  useEffect(() => {

    let countCompletedTasks = 0;
    taskList.forEach(task => task.isCompleted ? countCompletedTasks += 1 : null);
    setCompletedTasks(countCompletedTasks);

  }, [taskList])

  // Handler functions
  function handleCreateTask() {
    const newTask: TaskDTO = {
      id: uuidv4(),
      description: inputTask,
      isCompleted: false
    };
    setTaskList(prevTasks => [...prevTasks, newTask]);
    setInputTask('');
  }

  function handleToggleTask(id: string) {
    const tasks = taskList.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
        return task;
      }

      return task;
    });

    setTaskList(tasks);
  }

  function handleDeleteTask(id: string) {
    const tasks = taskList.filter(task => task.id !== id);
    setTaskList(tasks);
  }

  return (
    <>
      <header className={styles.header}>
        <img 
            src={logoSVG} 
            alt="Todo logo"  
            className={styles.header_logo}
        />
      </header>

      <main className={styles.container}>

        <div className={styles.container_bar}>
          <TextInput 
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
          <CreateButton onClick={handleCreateTask}/>
        </div>

        <div className={styles.container_info}>
          <div className={styles.info_created}>
            Tarefas criadas
            <Badge value={taskList.length} />
          </div>
          <div className={styles.info_finished}>
            Concluídas
            <Badge value={`${completedTasks} de ${taskList.length}`} />
          </div>
        </div>

        <div className={styles.container_tasks}>
          {
            taskList.length <= 0
            ? (
              <div className={styles.tasklist_empty}>
                <img src={clipboardPNG} alt="clipboard icon" />
                <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )
            : (
              taskList.map(item => (
                <CardItem 
                  data={item} 
                  key={item.id}
                  onCheck={() => handleToggleTask(item.id)}
                  onDelete={() => handleDeleteTask(item.id)}
                />))
            )
          }

        </div>

      </main>
    </>
  )
}

export default App
