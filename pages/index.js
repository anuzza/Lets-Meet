//our-domain.com/
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some adress 5, 12345 Some city",
  },

  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some adress 6, 12945 Some city",
  },

  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some adress 2, 12465 Some city",
  },
];

function Homepage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }; //always return a object
}
export default Homepage;
