import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();

  console.log("product ", params);

  return (
    <div>
      ProductDetail{' '}
      {params.id}
    </div>
  );
}
