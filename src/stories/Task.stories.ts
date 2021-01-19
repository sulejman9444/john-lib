// src/app/components/task.stories.ts
import { action } from '@storybook/addon-actions';
import { TaskComponent } from 'projects/mehaga-pck/src/lib/task.component';

export default {
  title: 'Task',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onArchiveTask: action('onArchiveTask'),
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0),
};
export const Default = () => ({
  component: TaskComponent,
  props: {
    task: taskData,
    onArchiveTask: actionsData.onArchiveTask,
  },
});
// archived task state
export const Archived = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      state: 'TASK_ARCHIVED',
    },
    onArchiveTask: actionsData.onArchiveTask,
  },
});
