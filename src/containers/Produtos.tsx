import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'
import { RootReducer } from '../store'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProdutos } from '../store/reducers/produtos'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const produtos = useSelector((state: RootReducer) => state.produtos)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((data) => dispatch(setProdutos(data)))
  }, [dispatch])

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((item) => item.id === produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos &&
          produtos.map((produto: ProdutoType) => (
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
