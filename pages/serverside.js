import React, { useState } from 'react'

const page1 = (props) => {
    console.log(props);
    const [data, setData] = useState(props.data)
    console.log(data);
  return (
      <>
          {data.map((elem) => {
              return (
                  <>
                      <li>{elem.name}</li>
                      </>
              )
          })}
      </>
  )
}
export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default page1