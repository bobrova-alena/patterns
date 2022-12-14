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
        <li>
          <Link href="/tests/two-pointers">
            <a>Two pointers</a>
          </Link>
        </li>
        <li>
          <Link href="/tests/fast-and-slow-pointers">
            <a>Linked List Cycle</a>
          </Link>
        </li>
        <li>
          <Link href="/tests/two-sum">
            <a>Two sum</a>
          </Link>
        </li>
        <li>
          <Link href="/tests/roman-to-integer">
            <a>Roman to integer</a>
          </Link>
        </li>
        <li>
          <Link href="/tests/longest-common-prefix">
            <a>Longest common prefix</a>
          </Link>
        </li>
        </ul>
      </div>
  
    </div>
  )
}
