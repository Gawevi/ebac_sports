import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutosState = Produto[]

const initialState: ProdutosState = []

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    setProdutos: (state, action: PayloadAction<Produto[]>) => {
      return action.payload
    }
  }
})

export const { setProdutos } = produtosSlice.actions
export default produtosSlice.reducer
