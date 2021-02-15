import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Patterns</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <ul>
        <li>
          <Link href="/tests/sliding-window">
            <a>Sliding window</a>
          </Link>
        </li>
        </ul>
      </div>
  
    </div>
  )
}
