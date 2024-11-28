/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ImageSlideshow from "../components/ImageSlideshow";
import { formatToRupiah, getData } from "../utils/data-local";

function DetailPage() {
  const { id: productId } = useParams();
  let data = getData().data.ads.filter((datas) => datas.id == productId);
  return (
    <div className="detail-container">
      <ImageSlideshow images={data[0].images} />
      <div className="detail-wrapper">
        <div className="detail-content-wrapper">
          <div className="detail-content-title">
            <p>📍 {data[0].location}</p>
            <h1>{data[0].title}</h1>
          </div>
          <div className="detail-content-price">
            <h1>{formatToRupiah(data[0].price)}</h1>
            <button className="btn-jual">Kirim Pesan</button>
          </div>
        </div>

        <div className="detail-description-wrapper">
          <div className="detail-description">
            <h2>Deskripsi</h2>
            <p>{data[0].description}</p>
          </div>
          <div className="detail-toko">
            <img src="https://picsum.photos/200/300?random=10000" />
            <h2>Nama Toko ❯</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
