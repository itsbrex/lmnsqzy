import { IGetCustomer } from '~domains/customers/interface'
import { ILmnsqzyMultiResponse } from '~general/general.responses'

export type GetCustomersResponse = Promise<ILmnsqzyMultiResponse<IGetCustomer>>
