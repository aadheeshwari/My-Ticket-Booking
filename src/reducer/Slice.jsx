import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: '',
    Movies: [
        {
          "id": 1,
          "name": "PENGUIN",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTOYExT1DZqkeF-m9EPLT52NMQrcFt8r70Q&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
           "occupied": "[37, 25, 44, 13, 2, 3]"
        },
        {
          "id": 2,
          "name": "KGF CHAPTER-1",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOMW1qwAYeO1j9WlC5pJs1d5ZKRCZ4nL3vQ&usqp=CAU",
          "select": "false",
          "price":" 200",
          "quantity": "1",
           "occupied": "[37, 25, 44, 13, 2, 3]"
        },
        {
          "id": 3,
          "name": "BHUJ",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1RyYdk5mgHQTC1Wer_3q39XRjDwNMvGzmrA&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
           "occupied": "[37, 25, 44, 13, 2, 3]"
        },
        {
          "id": 4,
          "name": "MAYA",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KEJXeLiCk4MnXD1K3LgEeiQjnTgZCTixlg&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
           "occupied": "[37, 25, 44, 13, 2, 3]"
        },
        {
            "id": 5,
            "name": "MASTER",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDPgOJxKhi4fK7iTvYrScRNSV5j6Ysc6LMw&usqp=CAU",
            "select": "false",
            "price": "200",
            "quantity": "1",
           "occupied": "[37, 25, 44, 13, 2, 3]"
          },
          {
          "id": 6,
          "name": "RATSASAN",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIhqzeoXXiTVc5rf31Ite4f4od0Dconll6g&usqp=CAU",
          "price": "200",
          "quantity": "1",
             "occupied": "[37, 25, 44, 13, 2, 3]"
        },
        {
          "id": 7,
          "name": "IMAIKKA NOODIKAL ",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79hYXX9Nr8fEfu73pGxOeZghvpEQXJO8KoQ&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
           "occupied": "[37, 25, 44, 13, 2, 3]"
        },
        {
          "id": 8,
          "name": "TEDDY",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L9gUS0FX3P4U9e-E51nACSHrlMUMJl6Qcg&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
           "occupied": "[37, 25, 44, 13, 2, 3]"
        },
      {
          "id": 9,
          "name": "HERO",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzp_grTVCnIENSapHvGX8nRwlTGWnML-Ed9Q&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
         "occupied": "[37, 25, 44, 13, 2, 3]"
        },
      ],
  Tamilmovies: [
        {
          "id": 1,
          "name": "BEAST",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqg5W-_hgyyEZeBJQCyyEBaLzjxS4hObKcNIdoKAYnuugcaV9zycehj-roooKXcmmjF0&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
           "occupied": "[10, 12, 50, 33, 28, 47]"
        },
        {
          "id": 2,
          "name": "VALIMAI",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAa04GCA0lmXeQ3ZIM0AbMxIfiePHzf1eZWZ2moEZO--caHcK1K1Uz25EEHGbSqLzkZ-4&usqp=CAU",
          "select": "false",
          "price":" 200",
          "quantity": "1",
          "occupied": "[10, 12, 50, 33, 28, 47]"
        },
        {
          "id": 3,
          "name": "SURARAI POTTRU",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglAwVSg5xPr13jH8caKFqcBZan6gsPaA4KXB4diBN_8c6WNXvKZUkESH43zlaa7jCo5g&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
          "occupied": "[10, 12, 50, 33, 28, 47]"
        },
        {
          "id": 4,
          "name": "ASURAN",
          "imageurl": "https://m.media-amazon.com/images/M/MV5BMDgwZWUyYzctOGU1NC00ZTFkLTgxM2EtNGU0ZWUwY2Y3YjhkXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          "select": "false",
          "price":"200",
          "quantity": "1",
          "occupied": "[10, 12, 50, 33, 28, 47]"
        },
        {
            "id": 5,
            "name": "MAHAAN",
            "imageurl": "https://igimages.gumlet.io/tamil/home/mahaan2812021m.jpg?w=376&dpr=2.6",
            "select": "false",
            "price": "200",
            "quantity": "1",
          "occupied": "[10, 12, 50, 33, 28, 47]"
          },
          {
          "id": 6,
          "name": "BHOOMI",
          "imageurl": "https://1.bp.blogspot.com/-p5aqzyadVwY/Xos13OZZFxI/AAAAAAAAZn0/peC2BmU7v_8OFiM_ZtLRBLWhePAr7wdQQCLcBGAsYHQ/s1600/Bhoomi-Movie-Budget-Hit-or-Flop-Box-Office-Collection-Day-Wise.jpg",
          "price": "200",
          "quantity": "1",
            "occupied": "[10, 12, 50, 33, 28, 47]"
        },
        {
          "id": 7,
          "name": " DON",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBv12i-_qgysLuYjOY6ZzGThdBlX7ErivKOMWhpIs4eR9BoDfrF0Ri8eDQPwhddexvrI&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
          "occupied": "[10, 12, 50, 33, 28, 47]"
        },
        {
          "id": 8,
          "name": "TEDDY",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4L9gUS0FX3P4U9e-E51nACSHrlMUMJl6Qcg&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
          "occupied": "[10, 12, 50, 33, 28, 47]"
        },
      {
          "id": 9,
          "name": "HERO",
          "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzp_grTVCnIENSapHvGX8nRwlTGWnML-Ed9Q&usqp=CAU",
          "select": "false",
          "price":"200",
          "quantity": "1",
        "occupied": "[10, 12, 50, 33, 28, 47]"
        },
      ],
  Kannadamovies: [
        {
          "id": 1,
          "name": "JAMES",
          "imageurl": "https://www.pinkvilla.com/imageresize/puneeth_rajkumar_james_poster.jpg?width=752&format=webp&t=pvorg",
          "select": "false",
          "price":"200",
          "quantity": "1",
          "occupied": "[20, 21, 30, 1, 2, 8]"
        },
        {
          "id": 2,
          "name": "BADAVA RASKAL",
          "imageurl": "https://static.toiimg.com/thumb/msid-88433782,width-219,height-317,imgsize-51112/88433782.jpg",
          "select": "false",
          "price":" 200",
          "quantity": "1",
          "occupied": "[20, 21, 30, 1, 2, 8]"
        },
        {
          "id": 3,
          "name": "CHAMAK",
          "imageurl": "https://m.media-amazon.com/images/M/MV5BYTQyNGI4YzEtOWJmNC00ZDFiLWEyYTMtYmE5YjI3MWZlZTU3XkEyXkFqcGdeQXVyMjY1MjkzMjE@._V1_.jpg",
          "select": "false",
          "price":"200",
          "quantity": "1",
          "occupied": "[20, 21, 30, 1, 2, 8]"
        },
        {
          "id": 4,
          "name": "KGF CHAPTER-1",
          "imageurl": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/K.G.F_Chapter_1_poster.jpg/220px-K.G.F_Chapter_1_poster.jpg",
          "select": "false",
          "price":"200",
          "quantity": "1",
          "occupied": "[20, 21, 30, 1, 2, 8]"
        },
        {
            "id": 5,
            "name": "ACT1978",
            "imageurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHwnznhnDHhKlAw_emlkU9O61r68ZA3N54XLuRuG6Kr0l64mCC",
            "select": "false",
            "price": "200",
            "quantity": "1",
          "occupied": "[20, 21, 30, 1, 2, 8]"
          },
          {
          "id": 6,
          "name": "YUVARATHA",
          "imageurl": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/yuvarathnaa-et00107707-30-03-2021-01-37-09.jpg",
          "price": "200",
          "quantity": "1",
            "occupied": "[20, 21, 30, 1, 2, 8]"
        },
        {
          "id": 7,
          "name": " KGF CHAPTER -2",
          "imageurl": "https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg",
          "select": "false",
          "price":"200",
          "quantity": "1",
          "occupied": "[20, 21, 30, 1, 2, 8]"
        },
        {
          "id": 8,
          "name": "100",
          "imageurl": "https://akamaividz2.zee5.com/image/upload/w_630,h_945,c_scale,f_auto,q_auto/resources/0-0-1z587327/portrait/1920x77079aee11cc5b74ff5a6553e2044f78bf0.jpg",
          "select": "false",
          "price":"200",
          "quantity": "1",
          "occupied": "[20, 21, 30, 1, 2, 8]"
          
        },
      {
          "id": 9,
          "name": "RANGI TARANGA",
          "imageurl": "https://upload.wikimedia.org/wikipedia/en/4/47/2015_Kannada_film_Rangitaranga_poster.jpg",
          "select": "false",
          "price":"200",
          "quantity": "1",
        "occupied": "[20, 21, 30, 1, 2, 8]"
        },
      ],
  
   ordermovie:[
     
    ]
  }

  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
     
    
      addmovie: (state, action) => {
     
        state.ordermovie.push(action.payload);
      },
      Removemovie:(state,action)=>{
         state.ordermovie.splice(action.payload,1)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addmovie ,Removemovie } = counterSlice.actions;
  
  export default counterSlice.reducer