import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const { data: produtos } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((item) => item.id === produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos &&
          produtos.map((produto) => (
            <Produto
              estaNosFavoritos={produtoEstaNosFavoritos(produto)}
              key={produto.id}
              produto={produto}
            />
          ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
