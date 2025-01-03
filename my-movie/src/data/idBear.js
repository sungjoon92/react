import idBear1 from "../assets/idBear/watch_bear1.png";
import idBear2 from "../assets/idBear/watch_bear2.png";
import idBear3 from "../assets/idBear/watch_bear3.png";
import idBear4 from "../assets/idBear/watch_bear4.png";
import idBear5 from "../assets/idBear/watch_bear5.png";
import idBear6 from "../assets/idBear/watch_bear6.png";
import idBear7 from "../assets/idBear/watch_bear7.png";
import idBear8 from "../assets/idBear/watch_bear8.png";
import idBear9 from "../assets/idBear/watch_bear9.png";
import idBear10 from "../assets/idBear/watch_bear10.png";
import idBear11 from "../assets/idBear/watch_bear11.png";
import idBear12 from "../assets/idBear/watch_bear12.png";
import idBear13 from "../assets/idBear/watch_bear13.png";
import idBear14 from "../assets/idBear/watch_bear14.png";
import idBear15 from "../assets/idBear/watch_bear15.png";
import idBear16 from "../assets/idBear/watch_bear16.png";
import idBear17 from "../assets/idBear/watch_bear17.png";
import idBear18 from "../assets/idBear/watch_bear18.png";

const idBear = [
  idBear1,
  idBear2,
  idBear3,
  idBear4,
  idBear5,
  idBear6,
  idBear7,
  idBear8,
  idBear9,
  idBear10,
  idBear11,
  idBear12,
  idBear13,
  idBear14,
  idBear15,
  idBear16,
  idBear17,
  idBear18,
];

export default idBear;

// 이방법도가능
// const importAll = (r) => r.keys().map(r);
// const idBear = importAll(require.context("../assets/idBear", false, /\.png$/));

// export default idBear;

// const idBear = Array.from({ length: 18 }, (_, i) =>
//   require(`../assets/idBear/watch_bear${i + 1}.png`)
// );

// export default idBear;
