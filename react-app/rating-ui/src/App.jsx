import Rating from "./components/Rating";







const App = () => {
  return ( 
<>

<Rating heading="how do you feel  about react?" color="blue" feedbackMessages={[
'Hate it',
'dont like it',
'just enough',
'good',
'gooood'


]}/>

</>

   );
}
 
export default App;