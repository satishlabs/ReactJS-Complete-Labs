
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './Courses';

const App = () =>{

  const [courseFlagState,setCourseFlagState] = useState(true);

  useEffect( () => { 
    console.log("[App] - 1st -useEffect()"); 
    //Http Calls 
    //Timers 
    
    return () =>{ 
    //CleanUp 
    console.log("[App] -Cleanup-1st- useEffect()"); 
    } 
    });

    useEffect(()=>{ 
      console.log("[App] - 2nd -useEffect()"); 
      //Http Calls 
      //Timers 
      
      
      return () =>{ 
      //CleanUp 
      console.log("[App] -Cleanup-2nd- useEffect()"); 
      } 
      },[]); 

      useEffect(()=>{ 
        console.log("[App] - 3rd - useEffect()"); 
        //Http Calls 
        //Timers 
        
        return () =>{ 
        //CleanUp 
        console.log("[App] -Cleanup-3rd- useEffect()"); 
        } 
        },[] ); 

        const hideShowCourses = ()=> { 
          console.log("[App] - hideShowCourses"); 
          setCourseFlagState(!courseFlagState); 
          } 

          let mycourse = null; 
          if(courseFlagState === true){ 
          mycourse = ( <Courses/> ); 
          } 
         

          return ( 
            <div className="container"> 
            <h1 className="text-center"> Welcome to JLC!!!</h1> 
            <br/> 
            <button className="btn btn-success" onClick={hideShowCourses} > 
            Hide Show Courses 
            </button> 
            <br/><br/><br/> 
            {mycourse} 
            </div> 
            ); 
            } 

export default App;
