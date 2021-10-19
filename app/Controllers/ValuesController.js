// import { ProxyState } from "../AppState.js";
// import { VMSnacks } from "../Services/VMService.js";


// //Private
// function _draw() {
//   let snacks = ProxyState.snacks;
//   let snackTemplate = ''
//   snacks.forEach(v => snackTemplate += v.CardTemplate)
//   document.getElementById("app").innerHTML = /*html*/`
//   <div class="my-3">
//     <button class="btn btn-secondary text-white elevation-2" onclick="app.snacksController.addValue()">Add Value</button>  
//     <div class="snacks d-flex flex-wrap my-3">
//       ${snackTemplate}
//     </div>
//   </div>
//   `
// }

// //Public
// export class ValuesController {
//   constructor() {
//     ProxyState.on("values", _draw);
//     _draw()
//   }

//   addValue() {
//     snack.addValue()
//   }

//   removeValue(id) {
//     snack.removeValue(id)
//   }

// }
