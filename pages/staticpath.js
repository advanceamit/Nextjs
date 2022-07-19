import React,{useState} from 'react'

const staticpath = (props) => {
    const [data, setData] = useState(props.data)
    console.log(data);
  return (
      <>
          {data.map((elem) => {
              return (
                  <>
                      <li>{elem.username}</li>
                      </>
              )
          })}
      </>
  )
}
export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default staticpath