export default function getTotalPrice(array = []) {
  return array?.reduce((acc, prod) => acc + prod?.price * prod?.quantity, 0);
}
