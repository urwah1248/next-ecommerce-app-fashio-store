import ProductsPage from '@/components/ProductsPage';

interface Props{
  products: Array<any>
}

export default function Necklaces({products}:Props) {
  
  return (
    <ProductsPage title="Necklaces" category="laptops" products={products}></ProductsPage>
  )
}

export const getStaticProps = async () => {

  const res = await fetch(`https://dummyjson.com/products`)
  const res2 = await res.json()
  const products = res2.products

  return {
    props:{
      products
    }
  }
  
}
