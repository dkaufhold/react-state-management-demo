/**
 * basic action examples
 *
 * Actions only have a type in this example.
 * See items actions for more complex use case.
 *
 * this is also the minimum requirement for an action.
 * Every action MUST have a type
 * Every action CAN have any number of additional properties
 *
 */

export const PING = 'PING'
export const ping = () => ({ type: PING })

export const PONG = 'PONG'
export const pong = () => ({ type: PONG })
