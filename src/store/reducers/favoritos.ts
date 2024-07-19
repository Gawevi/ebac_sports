import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto as ProdutoType } from '../../App'

type FavoritosState = {
  itens: ProdutoType[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload
      const index = state.itens.findIndex((p) => p.id === produto.id)
      if (index >= 0) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
