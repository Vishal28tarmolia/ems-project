import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  
  const tasks = (data && Array.isArray(data.tasks)) ? data.tasks : [];

  if (tasks.length === 0) {
    return (
      <div className="h-[50%] flex items-center justify-center w-full mt-16 text-gray-400">
        No tasks available
      </div>
    );
  }

  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {tasks.map((elem, idx) => {
        if (elem.active) return <AcceptTask key={idx} data={elem} />;
        if (elem.newTask) return <NewTask key={idx} data={elem} />;
        if (elem.complete) return <CompleteTask key={idx} data={elem} />;
        if (elem.failed) return <FailedTask key={idx} data={elem} />;
        return null;
      })}
    </div>
  );
};

export default TaskList;
