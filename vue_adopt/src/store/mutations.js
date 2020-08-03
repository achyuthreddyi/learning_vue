// import state from './state'
// import { species } from 'core-js/fn/symbol'

export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}
