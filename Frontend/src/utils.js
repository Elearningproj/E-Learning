import { config } from './services/config'

export function createUrl(endpoint) {
  return `${config.serverUrl}/${endpoint}`
}
