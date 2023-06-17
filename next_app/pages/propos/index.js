import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
    Bienvenue chez nous !!!!!
    <br/>
    <Link href="/contact">Vers contact</Link>
    </div>
  )
}

export default index