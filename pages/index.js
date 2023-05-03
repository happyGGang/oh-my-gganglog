import Head from 'next/head'
// import { useEffect, useState } from 'react'
import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/Date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="text-sm">갱로그의 갱! 갱입니다</p>
        <p className="text-sm">갱로그의 갱! 갱입니다</p>
        <p className="text-sm">갱로그의 갱! 갱입니다</p>
      </section>

      <section className="my-10">
        <h2 className={utilStyles.headingLg}>Recent posts</h2>
        <hr />
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} legacyBehavior>
                <a>{title}</a>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
