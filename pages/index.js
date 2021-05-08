import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.css'
import Header from './header.js'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import DataSetLeft from './DataSetLeft.js'

export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        data:[{title:'数据格式',arr:['dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124']},
        {title:'标注类型',arr:['dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124']},
        {title:'任务类型',arr:['dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124','dd21','124']}
        ],
    };
}
  render() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logov.png" />
      </Head>
      <Header />
      <div className={styles.homeBox}>
        <div className={styles.img} style={{backgroundImage: "url(" + ("/bjt.png") + ")"}}>
          {/* <Image src="/bj-left.png" className={styles.imgleft} alt="Fawai Logo" width={439} height={424} />
          <div className={styles.imgright}>
            <Image src="/bj-right.png" alt="Fawai Logo" width={478} height={424} />
          </div> */}
        </div>
        <div className={styles.homeTitle}>
          公开数据集
        </div>
        <div className={styles.searchBox}>
          <div className={styles.searchHome}>
            <div className={styles.searchLeft}>
              <SearchRoundedIcon style={{ fontSize: 26,marginTop:15}} />
              <input className={styles.searchInput} value="" placeholder="搜索数据集关键字" />
            </div>
            <div className={styles.searchRight}>
              <span className={styles.searchNumber}>3723</span>
              <span>公开数据集</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listHome}>
        <div className={styles.listContainer}>
          <div className={styles.filterContainer}>
          <DataSetLeft data={this.state.data} />
          </div>
        </div>
        < Dataset />
      </div>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
}
