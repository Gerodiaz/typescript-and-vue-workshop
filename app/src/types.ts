import type { restaurantStatusList } from './constants'
import { dietList } from './constants'

export type Dish = {
  id: string
  name: string
  status?: Diet
}

export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status?: Status
}

type Status = typeof restaurantStatusList[number]

type Diet = typeof dietList[number]
