import { ProxyState } from "../AppState.js";
// import { Value } from "../Models/VMValue.js";
import { Snacks } from "../Models/Target.js"

export class VMSnacks {

  money() {
    ProxyState.quarters += .25

  }

}


export const vmSnack = new VMSnacks();

