import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
        {products?.map(({id, title, price, description, category, image}) => ( // products.map은 map을 찾을 수 없다는 TypeError가 발생했지만 ?를 넣어주면서 해결
            <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
        ))}
    </div>
  );
}

export default ProductFeed;