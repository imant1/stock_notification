
export interface DecathlonItem {
  OldPrice: number
  Price: number
  IsAvailable: boolean
  IsNew: boolean
  Weight: number
  ItemId: number
  CategoryIds: number[]
  CategoryNames: string[]
  CategoryPathsToRoot: number[][]
  Regions: any
  Params: Params
  GroupSizes: any[]
  Size: string
  Color: string
  Author: any
  Barcode: any
  BuyUrl: any
  Description: string
  Model: any
  TypePrefix: any
  Vendor: string
  Algorithm: any
  PreviousPrice: any
  PictureUrl: string
  Url: string
  Name: string
  GroupId: string
}

export interface Params {
  margin: string
  numberAvailable: string
  available_ids: string
  available_sizes: string
}
