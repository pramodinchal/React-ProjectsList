import { useCallback, useState, useEffect, useRef } from 'react';


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);  
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);
 
  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   
    if(numberAllowed)  str += '1234567890'; 
     if(charactersAllowed) str += '!@#$%^&*()_+{}|":?><';

     for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
     }
     setPassword(pass);  

  }, [length,numberAllowed, charactersAllowed, setPassword])
   
 const copyPasswordToClipboard = useCallback(() =>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,10).select();
   window.navigator.clipboard.writeText(password);
 },[password])

   useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed, charactersAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 pb-12 my-8  mt-20 text-orange-500 bg-gray-700'>
    <p className='text-center text-white'>Password generator</p>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-3'> 
     
       <input type='text'
        value={password}
        className='outline-none w-full py-1 px-3'  
        placeholder='Password'
        readOnly
        ref={passwordRef}
       />
       <button onClick={copyPasswordToClipboard} className='bg-blue-400 text-black rounded-2lg p-2 focus:pointer-events-auto'>Copy</button>
      </div>
     <div className='flex gap-3'>
      <input type='range' min={6} max={50} value={length} onChange={(e)=>setLength(e.target.value)}/>
      <label className='text-white justify-center'>Length:{length} </label>

      <label className='text-white justify-center'>Number: </label>
      <input type='checkbox' defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev) => !prev)}/>

      <label className='text-white justify-center'>Character: </label>
      <input type='checkbox' defaultChecked={charactersAllowed}  onChange={()=>setCharactersAllowed((prev) => !prev)}/>
     </div> 
    </div>
       
    </>
  )
}

export default App
