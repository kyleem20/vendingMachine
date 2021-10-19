import { VMSnacks } from "./Services/VMService.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snacks } from "./Models/Target.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/VMValue').Value[]} */

  snacks = [
    new Snacks('KitKat', 1.50, 6),
    new Snacks('Skittles', 1.75, 8),
    new Snacks('Nerds', 1.00, 10),

  ]
  quarters = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
