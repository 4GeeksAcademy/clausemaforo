import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [colorR, setRed] = useState("")//1.DECLARANDO EL ESPACIO DE MEMORIA
	// const [colorY, setYellow] = useState("btn btn-secondary")
	// const [colorG, setVerde] = useState("btn btn-secondary")
	// luzCount()
	const palito = { height: "150px", width: "10px" }
	const semaforo = { height: "300px", width: "200px" }
	const luces = { height: "100px", width: "100px" }


	return (
		<div className="text-center">
			<div className=" row h-100 w-25 m-auto d-flex justify-content-center">
				<div className="bg-black" style={palito}></div>
			</div>
			<div className="bg-dark m-auto p-4 d-flex flex-column justify-content-center align-items-center " style={semaforo}>
				<button type="button" onClick={() => setRed("danger")} className={" m-1 rounded-circle btn btn-" + (colorR === "danger" ? "danger" : "secondary")} style={luces} ></button>
				<button type="button" onClick={() => setRed("warning")} className={" m-1 rounded-circle btn btn-" + (colorR === "warning" ? "warning" : "secondary")} style={luces} ></button>
				<button type="button" onClick={() => setRed("success")} className={"m-1 rounded-circle btn btn-" + (colorR === "success" ? "success" : "secondary")} style={luces} ></button>
			</div>
		</div>
	);
};

export default Home;




// import React, {useState} from "react";//1. importar el hook useState
// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
// //create your first component
// const Home = () => {
// // [espacio de memoria,funcion que actualiza el espacio de memoria]   <= return
//     // const [state,setState]=useState("")//2. ejecutamos el useState
//     //REACT
//     const [count,setCount]=useState(0)//1.DECLARANDO EL ESPACIO DE MEMORIA
//     const [text,setText]=useState("Seguir")
//     //JS
//     let nombre = "rosinni" //1. declarar un espacio de memoria con un dato
//     nombre = "Maria"// 2. actualizamos la variable
//     function handleCount() {
//         if (count === 0) {
//             //bloque de codigo que quiero que se ejecute
//             setCount(count+1)//2. ACTUALIZAMOS LA VARIABLE
//             setText("Siguiendo")
//         } else {
//             setCount(count-1)//2. ACTUALIZAMOS LA VARIABLE
//             setText("Seguir")
//         }
//     }
//     return (
//         <div className="text-center">
//             <h1 className="text-center mt-5">Seguidores {count}</h1>
//             <p>
//                 <img src={rigoImage} />
//             </p>
//                                 {/*EN HTML ERA ASI =====> onclick="nombreFuncion()" */}
//             <button href="#" className="btn btn-success"  onClick={handleCount}>
//                 {text} <i class="fa fa-arrow-right"></i>
//             </button>
//             <p>
//                 Made by{" "}
//                 <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
//                 love!
//             </p>
//         </div>
//     );
// };
// export default Home;