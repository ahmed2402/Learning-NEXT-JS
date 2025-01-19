import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <><Script>
        {`alert("welcome to contact page");`}
    </Script>
    <div>i am Contact</div></>
  )
}

export default contact

export const metadata = {
    title: "Contact Page",
    description: "This is facebook",
  };