import React, { Component } from 'react';
// import { Message,Icon } from 'semantic-ui-react';


import faker from 'faker';
console.log(faker)
const data = []
console.log((faker.date.between(2019,2020).getMonth()+1)+''+faker.date.between(2019,2020).getDate());
for (var id = 0; id < 6; id++) {
  var title =  faker.name.jobTitle();
  var image = faker.image.avatar();
  var author = faker.name.firstName();
  data.push({
    "title": title,
    "image": image,
    "author": author,
  })
}
class list extends Component {
    render() {
        return (
            <div className="video">
            <ul>
            {data.map((item, key) =>
                <li key={key}>
                  <a target="_blank" href="">
                  <img src={item.image} alt=""></img>
                  <p className='desc'>{item.author}<br></br>{item.title}</p>
                  </a>
                </li>
              )}
              
            </ul>
          </div>

        )
    }
}
export default list