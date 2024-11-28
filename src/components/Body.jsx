import { formatToRupiah, getData } from "../utils/data-local";
import Card from "./Card";

function Body() {
  //get data from datal-local.js using getData()
  const datas = getData();

  return (
    <div className="body-container">
      <h1 className="title">Iklan Terbaru</h1>
      <div className="card-container">
        {datas.data.ads.map((product, index) => (
          <Card
            key={index}
            productId={product.id}
            productTitle={product.title}
            productPrice={formatToRupiah(product.price)}
            productLocation={product.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
