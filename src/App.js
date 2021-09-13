// import logo from './logo.svg';
import styles from './App.module.css';

// * REDUX
import { useSelector, useDispatch } from 'react-redux'
import { queueMessage, popMessage } from './redux/queueSlice';

function App() {
  const queue = useSelector((state)=> state.queue.value)
  const dispatch = useDispatch()

  // console.log( queue)

  function messageSubmit(ev){
    ev.preventDefault();
    const id = Date.now().toString()
    const msg = ev.target.message.value
    ev.target.message.value = ''
    dispatch( queueMessage({ id, msg }) )
    setTimeout(()=> dispatch( popMessage({ id })) , 5000 )
  }

  return (
    <div className={styles.app}>
        <div className={styles.title}>Messaging Queue</div>
          <form className={styles.form} onSubmit={messageSubmit} >
            <label>Message : </label>
            <input type="text" id='message' />
            <input type="submit" value="Submit" />
          </form>
        <div className={styles.msgcontainer}>
          {queue.map((obj)=>(<div key={obj.id} className={styles.msg} >{obj.msg}</div>))}
        </div>
    </div>
    
  );
}

export default App;
