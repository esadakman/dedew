import { v4 as uuidv4 } from "uuid";
import { imgArt1, imgArt2, imgArt3, imgArt4, imgArt5 } from "../../Images";
import Card from "./Card";

const cards = [
  {
    key: uuidv4(),
    content: (
      <Card image={imgArt1} social={"imgArt1"} name="name1" role="role1" />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card image={imgArt2} social={"imgArt2"} name="name2" role="role2" />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card image={imgArt3} social={"imgArt3"} name="name3" role="role3" />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card image={imgArt4} social={"imgArt4"} name="name4" role="role4" />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card image={imgArt5} social={"imgArt5"} name="name5" role="role5" />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card image={imgArt2} social={"imgArt1"} name="name6" role="role6" />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card image={imgArt3} social={"imgArt1"} name="name7" role="role7" />
    ),
  },
];

export default cards;
