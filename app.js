//embend the variables and expressions within a string
const name = "Nyakundi";
const greeting = `How are you today ${name}`;


const changeDom = document.getElementById('my-dom');
changeDom.textContent("Hi, my name is Avid");

//arrow functions

const materials = [
       'Nyakundi',
       'Bernadette',
       'Finlay',
       'Mitchelle'
]

const materialLength1 = materials.map(function(material){
       return material.length;
});

const materialLength2 = materials.map((material) => {
       return material.length;
});

const materialLength3 = materials.map (material => material.length);


//this keyword
// inside a method as a property of an object

const me = {
       talk () {
              console.log(this);
       }
}

me.talk() // call the nethod from inside an abject using the this keyword.

//useState allows functional components to manage and update there own local state.
const test = () => {
       const count = (count, setCount) => useState(0);

       return (
              <div>
                     <p>You clicked {count} times</p>
                     <button onClick={() => setCount(count + 1)}>click me</button>
              </div>
       )
}
