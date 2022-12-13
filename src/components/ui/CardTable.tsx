import { useRef, useState } from 'react'


export const CardTable = () => {

  const add = useRef<HTMLInputElement>(null);

  // Initialize items
  const ordered = Object.keys(localStorage).sort().reduce(
    (obj: any, key) => { 
      obj[key] = localStorage[key]; 
      return obj;
    }, 
    {}
  );
  const orderedArray = Object.values(ordered);
  const [db, setdb] = useState<Array<any>>(orderedArray);

  /**
   * Add a task to the local storage
   */
  function addLocalStorage() {
    if (add.current !== null) {
      const value = add.current.value;
      const dbLength = db.length.toString();
      const key = dbLength;
      const obj: any = {};
      obj[key] = value;

      // Insert new item
      localStorage.setItem(dbLength, value);
      add.current.value = '';
      const ordered1 = Object.keys(localStorage).sort().reduce(
        (obj: any, key) => { 
          obj[key] = localStorage[key]; 
          return obj;
        }, 
        {}
      );
      const orderedArray1 = Object.values(ordered1);
      setdb(orderedArray1);
    }
  }

  /**
   * Delete all tasks from the local storage
   */
  const deleteAllTasks = () => {
    localStorage.clear();
    setdb([]);
  }

  /**
   * Delete completed tasks
   */
  function deleteTask(item: any) {
    let storage = { ...localStorage }
    const value: any = Object.keys(storage).find(key => storage[key] === item);
    localStorage.removeItem(value);
    storage = { ...localStorage }
    const aux = Object.values(storage);
    setdb(aux);
  }

  return (
    <div className="p-4 border shadow">
      <div className="row">
        <div className="col">
          <ul>
            <div className="d-flex mb-4">
              <input ref={add} type="text" id='add-input' className='form-control me-3' placeholder='Add new task' />
              <button className='btn btn-primary' onClick={addLocalStorage}>Add</button>
            </div>
            {db.length > 0 && Object.values(db).map((item) => (
                <div className="form-check" key={item}>
                  <svg onClick={() => deleteTask(item)} xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                    <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z"/>
                  </svg>
                  <input className='form-check-input' type="checkbox" value={item} id={item} />
                  <label className='form-check-label' htmlFor="flexCheckDefault">
                    {item}
                  </label>
                </div>
              ))}
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button className='btn btn-primary' onClick={deleteAllTasks}>Delete all tasks</button>
      </div>
    </div>
  )
}
