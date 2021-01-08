import React from "react";
import Person from "./Person";
function NameList() {
        const names = [
          {
            id: 1,
            first_name: "Geri",
            email: "gparrot0@yellowpages.com",
            gender: "Male",
          },
          {
            id: 2,
            first_name: "Loydie",
            email: "lbeeston1@prlog.org",
            gender: "Male",
          },
          {
            id: 3,
            first_name: "Vilhelmina",
            email: "vabriani2@hostgator.com",
            gender: "Female",
          },
          {
            id: 4,
            first_name: "Elnore",
            email: "eclitheroe3@discuz.net",
            gender: "Female",
          },
          {
            id: 5,
            first_name: "Tadeas",
            email: "tprobetts4@boston.com",
            gender: "Male",
          },
          {
            id: 6,
            first_name: "Panchito",
            email: "pbernholt5@mysql.com",
            gender: "Male",
          },
          {
            id: 7,
            first_name: "Delilah",
            email: "dallbrook6@github.io",
            gender: "Female",
          },
          {
            id: 8,
            first_name: "Rosa",
            email: "rrabidge7@ameblo.jp",
            gender: "Female",
          },
          { id: 9, first_name: "Teddie", email: "tlevin8@g.co", gender: "Female" },
          {
            id: 10,
            first_name: "Suzann",
            email: "srenault9@ning.com",
            gender: "Female",
          },
        ];
      const nameList = names.map((names, index) => <Person person={names.first_name} key={index} value={names.id} email={names.email}></Person>);
  //const names = ["Imran", "Sam", "Jane"];
  const nameLists = names.map((name, index) => (
    <h2 key={index}>
      {name},{index}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
