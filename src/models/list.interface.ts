export interface TableProps {
  rows: Data[]
  rowsPerPageOptions: number[]
  headCells: readonly HeadCell[]
}

export interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

export interface Data {
  calories: number
  carbs: number
  fat: number
  name: string
  protein: number
}