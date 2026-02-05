const TimerControls = ({onReset,isRunning,onToggle}) => {
    return (
        <div>
             <button onClick={onToggle} className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3" >

        {isRunning?'pause':'Start'}
      </button>
      <button onClick={onReset} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">

        Reset
      </button>

        </div>



      );
}
 
export default TimerControls;