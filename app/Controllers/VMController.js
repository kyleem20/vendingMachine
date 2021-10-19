import { ProxyState } from "../AppState.js";
import { vmSnack, VMSnacks } from "../Services/VMService.js";


//Private
// function _draw() {
//   let vendedSnacks = ProxyState.snacks;
//   let snacksTemplate = ''
//   vendedSnacks.forEach(v => snacksTemplate += v.CardTemplate)
//   document.getElementById("app").innerHTML = /*html*/`
//   <div class="my-3">
//     <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.addValue()">Add Value</button>  
//     <div class="vendedSnacks d-flex flex-wrap my-3">
//       ${snacksTemplate}
//     </div>
//   </div>
//   `
// }

function _drawQuarters() {
  document.getElementById("quarters").innerText = `$${ProxyState.quarters}`
}

//Public
export class VMController {
  constructor() {
    ProxyState.on("quarters", _drawQuarters);
    _drawQuarters()
  }

  addMoney() {
    vmSnack.money()
  }

  removeValue(id) {
    snack.removeValue(id)
  }

}
