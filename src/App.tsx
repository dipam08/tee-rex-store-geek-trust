import {RootLayout} from "./layouts/rootLayout.tsx";
import {ProductList} from "./features/products/components/ProductList.tsx";


const App = () => {
    return <RootLayout mainSection={<ProductList />} sideSection={<div>side section</div>}/>
}

export default App