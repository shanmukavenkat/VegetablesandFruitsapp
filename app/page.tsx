
import HomeComponent from '@/components/HomeComponent'
import  ProductPage from './products/page'

export default  function Home() {
  

  return (
    <section>
    <HomeComponent/>
        <div className='container mt-8 flex items-center justify-between gap-10'>
          <div className='grow'>
            <ProductPage/>
          </div>
        </div>  
    </section>
  )
}
