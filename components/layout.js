import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'




const name = 'Platform Team Communcations Hub'
export const siteTitle = 'Platform Team Communication Hub'


export default function Layout({ children, home }) {

  return (
    <div className= "row {styles.container}">
      <Head>
        <link rel="icon" href="/vermeer-favicon.png" />
      </Head>

    <div className='row'>
      <header>
          {home ? (
            <>
              <div className='three columns header'>
                <img
                  className='headerImg'
                  priority
                  src="images/vermeer-logo.svg"
                  // height={144}
                  // width={144}
                  alt={name}
                />
              </div>
              <div className='nine columns header'>
                  <h1 className='headerTitle'>{name}</h1>
              </div>
            </>
          ) : (
            <>
            <div className='three columns header'>
                <img
                  className='headerImg'
                  priority
                  src="images/vermeer-logo.svg"
                  // height={144}
                  // width={144}
                  // alt={name}
                />
              </div>
              <div className='nine columns header'>
                  <h1 className='headerTitle'>{name}</h1>
              </div>
            <div className='two columns {styles.backToHome}'>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
          </div>
            </>
          )}
        </header>
    </div>    

    <div className='row'>
      <div className='nine columns'>
        <main>{children}</main>
      </div>
      <div className='three columns sidebar'>
        <sidebar>
            <section className="sidebarItem">
                  <h3 className="sidebarTitle">An Aside</h3>
                  <p>
                      It can often be a wonder what the Platform Team does in a world with so many "platforms". Well, we hope that this handy website will not only answer that question for you but also provide many other insights and information you will find useful!
                  </p>
              </section>
          
              <section className="sidebarItem">
                      <h3 className="sidebarTitle">Contributing Content</h3>
                      <p>
                          To contribute content to this site please refer to the README on <a href = "https://github.com/arobbins-vermeer/pt-comm-hub/tree/contribute">GitHub</a>
                      </p>
              </section> 
        </sidebar> 
      </div>
    </div>


    </div>
  )
}
