import './Task.css';
import list from './assets/icons/list.svg';
import add from "./assets/icons/add.svg";
import done from './assets/icons/done.svg';
import pending from './assets/icons/pending.svg';
import abandon from './assets/icons/abandon.svg';
import waiting from './assets/icons/waiting.svg';

const IconMap = {
  'add': add,
  'done': done,
  'pending': pending,
  'abandon': abandon,
  'waiting': waiting,
}

const MeaningMap = {
  'add': '新任务',
  'done': '已完成',
  'pending': '进行中',
  'abandon': '已废弃',
  'waiting': '未开始',
}


function Task(props) {
  const { type, title, date } = props;
  return (
    <div className='task'>
      <div className={`task_title task_${type}`}>
        {title}
      </div>
      <div className='task_body'>
        <span className='task_event'>
          <img className='task_list_icon' src={list} alt='list icon' title='活动日志' />
            &nbsp;&nbsp;{date} 创建
            </span>
        <span className={`status_tag task_${type}`}>{MeaningMap[type]}</span>
      </div>
      <div className='task_footer'>
        <div className='task_arrow'></div>
      </div>
    </div>
  )
}

function Node(props) {
  const { type } = props;
  return (
    <>
      <div className='line'>&nbsp;</div>
      <div className={`node task_${type}`}>
        <img style={{ width: '100%', height: '100%' }} src={IconMap[type]} alt={`${type} icon`} title={MeaningMap[type]} />
      </div>
      <div className='line'>&nbsp;</div>
    </>
  )
}

function TaskNode(props) {
  const { type = 'add', title } = props;
  return (
    <div className='task_wrapper'>
      {title && <Task {...props} />}
      <Node type={type} />
    </div>
  )
}

export default TaskNode;
